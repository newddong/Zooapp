import React, {createContext } from 'react';

export const TabContext = createContext({
   toggle:()=>{console.log('default')},
});
