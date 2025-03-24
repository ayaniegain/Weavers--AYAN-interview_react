import React, { act, createContext, useContext, useReducer, useState } from "react";
let AuthMainContex = createContext(null);
let AuthDispatchContex = createContext(null);

function AuthContext({ children }) {
  const [loginUser, setLoginUser] = useState(JSON.parse(localStorage.getItem("user"))||null);



  let initialUserData = JSON.parse(localStorage.getItem("data")) || [];
  const [user, dispatch] = useReducer(userReducer, initialUserData);

  function userReducer(data, action) {
    switch (action.type) {
      case "register": {
        let registerValue = [...data, { ...action.payload }];
        localStorage.setItem("data", JSON.stringify(registerValue));
        return registerValue;
      }
      case "login": {
        localStorage.setItem("user", JSON.stringify(action.payload));
        return { ...action.payload }; 
      }
      case "logout": {
        localStorage.removeItem("user");
        // localStorage.removeItem("redirectUrl");
    // setLoginUser(null); 

        return null; 
      }
      default:
        return data;
    }
  }
  


  return (
    <AuthMainContex.Provider value={{loginUser }}>
      <AuthDispatchContex.Provider value={{ user, dispatch,setLoginUser }}>
        {children}
      </AuthDispatchContex.Provider>
    </AuthMainContex.Provider>
  );
}

export default AuthContext;

export function useAuth() {
  return useContext(AuthMainContex);
}

export function useDispatchAuth() {
  return useContext(AuthDispatchContex);
}
