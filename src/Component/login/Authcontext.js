// import React, { createContext, useState } from 'react'

// export const Authcontext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsloggedIn] = useState(false); //trang thai dang nhap;
//     const [userName, setUsername] = useState("");

//     const handlelogin = (name) => {
//         setIsloggedIn(true);
//         setUsername(name);
//     };

//     const handleLogout = () => {
//         setIsloggedIn(false);
//         setUsername("");
//     };

//     return
//     (
//         <Authcontext.Provider value={{ isLoggedIn, userName, handlelogin, handleLogout }}>
//             {children}
//         </Authcontext.Provider>
//     );
// };
