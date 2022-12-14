import { useState } from "react"
import { Link,useNavigate} from "react-router-dom"
import styled from "styled-components"
import Form from "./common/Form"
import {Button} from './common/Button'
import { postSignUp} from "../services/TavernaOnlineServices"


export default function SignUpPage(){

    const [loading, setLoading] = useState(false)
    const [disabled, setDesibled] = useState(false)

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        name: '',
        image: '',
        password:'',
        confirmPassword:''
    })

    function handleForm(e){
        e.preventDefault()
        // console.log(e.target.name, e.target.value )
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function sendForm(e) {

        e.preventDefault()

        const body ={
            ...form
        }

        setLoading(true)
        setDesibled(true)

        try{
            const response = await postSignUp(body)
            console.log('deu bom', response);
            navigate('/sign-in');
             setForm({ 
                email: '',
                name: '',
                image: '',
                password:'',
                confirmPassword:''})
        }catch({response}){
            alert(response.data.message);
            setLoading(false);
            setDesibled(false)
        }
    }

    return (
        <Wrapper>
            <LogoTop>
                 Taverna Online
            </LogoTop>

            <h2>Crie uma conta</h2>
             <Form onSubmit={sendForm}>
               
             <input
                id='forName'
                onChange={handleForm}
                type='text'
                name='name'
                value={form.name}
                placeholder='Nome'
                disabled={disabled}
                required/>
               
                <input
                id='forEmail'
                onChange={handleForm}
                type='email'
                name='email'
                value={form.email}
                placeholder='E-mail'
                disabled={disabled}
                required/>

                <input
                id='forImage'
                onChange={handleForm}
                type='texto'
                name='image'
                value={form.image}
                placeholder='Imagem do perfil'
                disabled={disabled}
                required/>
                
                <input
                id='forpassword'
                onChange={handleForm}
                type='password'
                name='password'
                value={form.password}
                placeholder='Senha'
                disabled={disabled}
                required/>

                <input
                id='for confirmPimage'
                onChange={handleForm}
                type='password'
                name='confirmPassword'
                value={form.confirmPassword}
                placeholder='Confirme a senha'
                disabled={disabled}
                required/>

               <Button type='submit'>Cadastrar</Button>

             </Form>

             <Link to={`/sign-in`}>
                 <RodaPe>J?? tem uma conta? Entre agora!!</RodaPe>
             </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
        font-family: 'MedievalSharp', cursive;
        
    }

    h2{ 
        font-family: 'MedievalSharp', cursive;
        font-size: 20px;
        opacity: 0.5;
        font-weight: 600;
    }
    
 `

const LogoTop = styled.h1`


   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #6139FF;
    font-family: 'Sketch-Gothic-School';
    font-size: 50px;
    font-weight: 450;
    opacity: 0.8
`

const RodaPe = styled.h3`
    font-family: 'MedievalSharp', cursive;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    margin-top:60px;
    color: #535353;
    opacity: 0.5;
`
        

        