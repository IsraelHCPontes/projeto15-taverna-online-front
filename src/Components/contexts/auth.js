import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext({});

export default function AuthProvider({children}) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
		const request = axios.get("https://taverna-online.onrender.com/products");
		request.then(response => {
            setProducts(response.data);
        });
        request.catch(error => {});
	}, []);

    return (
        <AuthContext.Provider value={{ products }}>
            {children}
        </AuthContext.Provider>
    )

}