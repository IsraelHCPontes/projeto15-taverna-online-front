import { useContext, useState } from "react"
import { Link,useNavigate} from "react-router-dom"
import styled from "styled-components"
import { AuthContext } from "./contexts/auth"
import Form from "./common/Form"
import {Button} from './common/Button'
import { postSignUp, postSignIn} from "../services/TavernaOnlineServices"


export default function SignInPage(){

    const [loading, setLoading] = useState(false)
    const [disabled, setDesibled] = useState(false)

    const {setToken} = useContext(AuthContext);

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password:''
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
            const response = await postSignIn(body);
            setToken(response.data.token);
            console.log('deu bom', response);
            localStorage.setItem('tavernaOnline', JSON.stringify({token: response.data.token}));
            const auth = JSON.parse(localStorage.getItem("tavernaOnline"));
            console.log('login', auth.token)
            navigate('/');
             setForm({ 
                email: '',
                password:''
                })
        }catch(error){
            console.log('deu ruin', error)
            alert(error);
            setLoading(false);
            setDesibled(false)
        }
    }

    return (
        <Wrapper>
            <LogoTop>
                 Taverna Online
            </LogoTop>
             <Form onSubmit={sendForm}>
       
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
                id='forpassword'
                onChange={handleForm}
                type='password'
                name='password'
                value={form.password}
                placeholder='Senha'
                disabled={disabled}
                required/>


               <Button type='submit'>Entrar</Button>

             </Form>

             <Link to={`/sign-up`}>
                 <RodaPe>Não tenho conta, criar uma conta!!</RodaPe>
             </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
        font-family: 'MedievalSharp', cursive;
        
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
        

        