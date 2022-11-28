import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../services/TavernaOnlineServices";

export const AuthContext = createContext({});

export default function AuthProvider({children}) {

    const [user, setUser] = useState({});
    const [token, setToken] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [products, setProducts] = useState([]);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
		const request = axios.get(`${BASE_URL}/products`);
		request.then(response => {
            setProducts(response.data);
        });
        request.catch(err => console.log(err));
	}, []);

    return (
        <AuthContext.Provider value={{ user, setUser, setToken, isLoggedIn, setIsLoggedIn, products, config }}>
            {children}
        </AuthContext.Provider>
    )

}