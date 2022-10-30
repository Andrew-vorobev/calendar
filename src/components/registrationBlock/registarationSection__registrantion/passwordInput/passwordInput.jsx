import React from "react";
import password from"../../../../image/password.png"
import module from "./passwordInput.module.css";
function PasswardInput() {
  return (
    <div className={module.passwordInput_container}>
        <img src={password} alt="pop" />
        <input
          type="password"
          placeholder="Пороль"
          className={module.passwordInput}
        />
      </div>
  );
}
export default PasswardInput
