import axios from 'axios';

const BASE_URL = "https://taverna-online-api.onrender.com"

 //taverna-online-api.onrender.com

function creatHeaders(){
  const auth = JSON.parse(localStorage.getItem("tavernaOnline"));
  console.log('ciracao', auth.token)
  const config ={
    headers:{
      Authorization:`Bearer ${auth.token}`
    }
  }
  return config
};

function postSignIn(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`,body);
    return promise;
  }

function postSignUp(body){
      const promise = axios.post(`${BASE_URL}/sign-up`, body)
      return promise;
  }

function getCart(body){
  const config = creatHeaders();
  const promise = axios.get(`${BASE_URL}/cart`, config)
  console.log('getCart', promise, config)
  return promise;
};

function getDataUser(body){
  const config = creatHeaders();
   const promise = axios.get(`${BASE_URL}/user`, config)
  return promise;
};




export {
  BASE_URL,
    postSignIn,
    postSignUp,
    getCart,
    getDataUser
 };