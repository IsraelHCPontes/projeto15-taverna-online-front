import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductList from "./ProductList";

import userImage from "../../Assets/img/defaultUser.png";
import homeImage from "../../Assets/img/home.png";
import cartImage from "../../Assets/img/cart.png";
import loginImage from "../../Assets/img/loginUser.png";

export default function MainPage(){

    return (
        <>
            <Header>
                <img src={userImage} alt="user"></img>
                <div>
                    <p>Faça login para </p>
                    <h1>ver a sua conta!</h1>
                </div>
            </Header>
            <List>
                <ProductList />
            </List>
            <Footer>
                <div>
                    <Link to={'/'}>
                        <img src={homeImage} alt="home"></img>
                        <h6>Menu</h6>
                    </Link>
                </div>
                <div>
                    <Link to={'/cart'}>
                        <img src={cartImage} alt="cart"></img>
                        <p>Carrinho</p>
                    </Link>
                </div>
                <div>
                    <Link to={'/sign-in'}>
                        <img src={loginImage} alt="login"></img>
                        <p>Login</p>
                    </Link>
                </div>
            </Footer>
        </>
    )
}

const Header = styled.div`
    @media(max-width: 1080px) {
        width: 100%;
        height: 101px;
        padding-top: 40px;
        padding-left: 16px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-family: 'MedievalSharp', cursive;

        img {
            width: 40px;
            height: 40px;
            margin-right: 8px;
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        p {
            font-size: 11px;
            color: #8f8f8f;
        }

        h1 {
            font-size: 19px;
            color: #535353;
        }
    }
`

const List = styled.ul`
    @media(max-width: 1080px) {
        min-width: 100%;
        margin-bottom: 56px;
        display: grid;
        grid-template-columns: auto auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style: none;
    }
`;

const Footer = styled.div`
    @media(max-width: 1080px) {
        position: fixed;
        bottom: 0;
        right: 0;
        min-width: 100%;
        height: 56px;
        padding: 10px 16px;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'MedievalSharp', cursive;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);

        div {
            width: 25px;
            height: 35px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h6 {
                font-size: 10px;
                color: #6139ff;
            }

            p {
                font-size: 10px;
                color: #535353;
            }
        }
    }
`