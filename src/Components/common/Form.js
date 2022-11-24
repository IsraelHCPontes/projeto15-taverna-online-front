import styled from "styled-components";

const Form = styled.form`

        font-family: 'Saira Stencil One', cursive;
        margin-top: 40px;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;

        label {
            font-size: 18px;
            font-weight: 400;
            line-height: 21px;
            letter-spacing: 0em;
            text-align: left;
        }

        input{
            height: 40px;
            width: 345px;
            left: 25px;
            top: 233px;
            border-radius: 5px;

            margin-bottom: 12px;
            
           
            border: 1px solid #D5D5D5;
            border-radius: 3px;
            
            font-family: 'Saira Stencil One', cursive;
            font-size: 20px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
            padding-left: 11px;
            text-align: left;
            border: none;
            background: #EFEBFF;
          
            
         
        }

        input::placeholder{
            
            font-family: 'Saira Stencil One', cursive;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 23px;
            color: #535353;
            opacity: 0.7;

        }

`

export default Form;