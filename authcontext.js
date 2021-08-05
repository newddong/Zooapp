import React, {createContext } from 'react';

export const AuthContext = createContext({
   token:'',
   getToken:()=>token,
   setToken:(input)=>{token=input}
});
