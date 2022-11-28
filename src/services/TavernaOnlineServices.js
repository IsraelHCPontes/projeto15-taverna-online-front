import axios from 'axios';

const BASE_URL = "https://taverna-online-api.onrender.com"

 //http://localhost:5001

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


export {
    BASE_URL,
    postSignIn,
    postSignUp,
 };