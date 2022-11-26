import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { AuthContext } from "../contexts/auth";

import whiteCart from "../../Assets/img/whiteCart.png";

export default function MainPage(){

    const {products} = useContext(AuthContext);

    return (
        <>
            {products?.map(product =>
                <Product key={product.id}>
                    <Link to={`/${product.id}`}>
                        <img src={product.image} alt={product.title} />                      
                    </Link>
                    <LowerDiv>
                        <div>
                            <h1>{product.name}</h1>
                            <p>${product.price}</p>
                        </div>
                        <button>
                            <img src={whiteCart} alt="cart"></img>
                        </button>
                    </LowerDiv>
                </Product>
            )}
        </>
    );
}

const Product = styled.li`
    @media(max-width: 1080px) {
        width: 167px;
        height: 260px;
        margin: 0 16px 16px 15px;
        background: #ffffff;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border: 1px solid #DDDDDD;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        img {
            width: 164px;
            height: 164px;
            border-radius: 5px 5px 0px 0px;
        }

    }
`;

const LowerDiv = styled.div`
    @media(max-width: 1080px) {
        min-width: 100%;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        font-family: 'MedievalSharp', cursive;

        h1 {
            margin-right: 12px;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: #535353;
        }

        p {
            margin-right: 12px;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: #6139ff;
        }

        button {
            right: 0;
            bottom: 0;
            width: 30px;
            height: 30px;
            background: #6139ff;
            border: none;
            border-radius: 15px;

            img {
                width: 16px;
                height: 16px;
            }
        }
    }
`;