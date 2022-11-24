import axios from 'axios';

const BASE_URL = 'http://localhost:5001'

function creatHeaders(){
  const auth = JSON.parse(localStorage.getItem("myWallet"));
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


export {
    postSignIn,
    postSignUp,
 };