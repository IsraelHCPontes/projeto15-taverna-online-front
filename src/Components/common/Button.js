import styled from "styled-components";

const Button  = styled.button`
        margin-top: 20px;
        height: 50px;
        width: 150px;
        left: 25px;
        top: 233px;
        border: none;  
        background: #6139FF;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Saira Stencil One', cursive;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        color: #ffffff;
        &:hover{
            cursor: pointer;
        }
`
const ButtonFacke =styled.div`  height: 45px;
        width: 303px;
        left: 36px;
        top: 381px;
        border: none;
        border-radius: 4.636363506317139px;
        background: #52B6FF;
        border-radius: 4.63636px;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.7;

        font-family: Lexend Deca;
        font-size: 21px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: center;
        color: #ffffff;`

export { Button, ButtonFacke}