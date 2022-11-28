import styled from "styled-components"
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../services/TavernaOnlineServices";

export default function CheckoutPage(){
    const [checkout, setCheckout] = useState([])
    const navigate = useNavigate();

    let itens = 0
    let valorTotal = 0
     
    checkout.forEach(({amount}) => itens = Number(itens) + Number(amount))
    checkout.forEach(({price}) => valorTotal = Number(valorTotal) + Number(price))
    

    useEffect(() => {
        async function fetchData(){
            try{
                const res = await getCart();
                setCheckout(res.data)
                console.log('dentrem', checkout)
            }catch(error){
                console.log(error)
            }
        }
        fetchData();
    }, []);

    function Product(){
        return checkout.map(product =>{
            return (
            <ContainerPorduct>
                <ContainerImg>s
                    <img src={product.image} alt="" />
                </ContainerImg>
                <ProductDatas>
                    <NameProduct>{product.name}</NameProduct>
                    <ValueProduct>${product.price}</ValueProduct>
            </ProductDatas>
        </ContainerPorduct>)})
        
    }

    return(
        <Wrapper>
            <TextoCart>Compra realizada com sucesso!</TextoCart>
                <ContainerPorducts>
                  <Product/>
                </ContainerPorducts>
                <Price>Total: R${valorTotal}</Price>
                <Footer>
                    <button onClick={() => navigate('/')}>Voltar ao menu</button>
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

const Price = styled.h2`
    padding-top: 100px;
    padding-right: 140px;
    font-family: 'MedievalSharp', cursive;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    color: #535353;
    text-align: left; 
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
        bottom: 0;
        right: 0;
        min-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        font-family: 'MedievalSharp', cursive;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
        z-index: 1;

        button{
            height: 40px;
            width: 343px;
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