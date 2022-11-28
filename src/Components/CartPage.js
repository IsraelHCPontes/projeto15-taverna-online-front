import styled from "styled-components"
import product from '../Assets/img/Rectangle 20.png';
import { useEffect, useState} from "react";
import { getCart } from "../services/TavernaOnlineServices";
import { useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";

export default function CartPage(){
    const [cart, setCart] = useState([])
    const navigate = useNavigate();

    let itens = 0
    let valorTotal = 0
     
    cart.forEach(({amount}) => itens = Number(itens) + Number(amount))
    cart.forEach(({price}) => valorTotal = Number(valorTotal) + Number(price))
    

    useEffect(() => {
        async function fetchData(){
            try{
                const res = await getCart();
                setCart(res.data)
                console.log('dentrem', cart)
            }catch(error){
                console.log(error)
            }
        }
        fetchData();
    }, []);

    function Product(){
        return cart.map(product =>{
            return (
            <ContainerPorduct>
                <ContainerImg>s
                    <img src={product.image} alt="" />
                </ContainerImg>
                <ProductDatas>
                    <NameProduct>{product.name}</NameProduct>
                    <AmountProduct>{product.amount}x</AmountProduct>
                    <ValueProduct>${product.price}</ValueProduct>
                    <ButtonsAmount>
                        <button>+</button>
                        <h4>{product.amount}</h4>
                        <button>-</button>
                     </ButtonsAmount>
            </ProductDatas>
        </ContainerPorduct>)})
        
    }

    return(
        <Wrapper>
            <Amount>{itens} Itens</Amount>
            <TextoCart>Carrinho de compras</TextoCart>
                <ContainerPorducts>
                  <Product/>
                </ContainerPorducts>
                <Footer>
                    <h2>Total: R${valorTotal}</h2>
                    <button>checkout</button>
                </Footer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 343px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    position: relative;
`
const TextoCart = styled.h2`
    padding-top: 100px;
    padding-right: 140px;
    font-family: 'MedievalSharp', cursive;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    position: absolute;
    color: #535353;
    text-align: left; 
`
const Amount = styled.h3`
    font-family: 'MedievalSharp', cursive;
    font-family: MedievalSharp;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    position: absolute;
    width: 50px;
    height: 18px;
    left: 285px;
    top: 57px;

`

const ContainerPorducts = styled.div`
    margin-top: 145px;
    width: 500px;
    height: 700px;
    display:flex;
    flex-direction: column;
    align-items:center;
    overflow: auto;
`
const ContainerPorduct = styled.div`
    height: 120px;
    width: 343px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: #ffffff;
    display: flex;
    align-items:center;
    position: relative;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.20);
`
const ContainerImg = styled.div`
    width: 150px;
    height: 120px;
    border-radius: 5px;
    overflow: hidden;
    display:flex;
    align-items:center;
    justify-content:center;
`
const ProductDatas = styled.div`
    width: 190px;
    height: 120px;
    border-radius: 5px;
    overflow: hidden;  
`
const ContainerAmount = styled.div`
`
const NameProduct = styled.h2`
    padding-top: 12px;
    font-family: MedievalSharp;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.23999999463558197px;
    text-align: left;

`

const AmountProduct = styled.h4`
    padding-top: 10px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: -0.23999999463558197px;
    text-align: left;
`

const ValueProduct = styled.h4`
    padding-top: 10px;
    font-family: MedievalSharp;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.23999999463558197px;
    text-align: left;
    color: blue;
`

const ButtonsAmount = styled.div`
    position: absolute;
    width: 82px;
    height: 20px;
    left: 240px;
    top: 40 px;
    display: flex;
    justify-content: space-between;

    button{
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`


const Footer = styled.div`
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
        font-size: 22px;
        font-family: 'MedievalSharp', cursive;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
        z-index: 1;

        button{
            margin-right:15px;
            height: 35px;
            width: 135px;
            left: 232px;
            top: 769px;
            border-radius: 3px;
            padding: 13px 30px 13px 30px;
            border:none;
            background: #6139FF;
            display: flex;
            align-items: center;
            justify-content: center;


            font-family: MedievalSharp;
            font-size: 20px;
            font-weight: 500;
            line-height: 16px;
            letter-spacing: -0.23999999463558197px;
            text-align: center;
            color: #ffffff;
        }
`