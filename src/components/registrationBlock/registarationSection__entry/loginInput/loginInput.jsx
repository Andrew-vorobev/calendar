import React from "react";
import module from "./loginInput.module.css";
import login from"../../../../image/login.png"
function LoginInput() {
  return (
        <div className= {module.loginInput_container}>
          <img src={login} alt="pop" />
          <input type="text" placeholder="Логин" className={module.loginInput} />
        </div>

  );
}
export default LoginInput
