import React, { createContext, useContext, useState } from 'react'
const UserContext =createContext();
export default function App2() {
    const[user,setUser]=useState('anjaliii')
  return (
    <UserContext.Provider value={user}>
    <div>App2 <Compo2/></div>
    </UserContext.Provider>
  )
}

function Compo2(){
     return(
        
               <div>compo2 <Compo3/></div>
       
     )
}
 function Compo3(){
     return(
         <div>compo3 <Compo4/></div>
     )
 }

 function Compo4(){
     const user1=  useContext(UserContext)

     return(
         <div>compo4 {user1}</div>
     )
 } 