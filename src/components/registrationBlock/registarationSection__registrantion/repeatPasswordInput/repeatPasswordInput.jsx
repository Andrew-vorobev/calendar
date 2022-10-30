import React from "react";
import module from "./repeatPasswordInput.module.css";
function RepeatPasswardInput() {
  return (
    <div className={module.passwordInput_container}>
        <input
          type="password"
          placeholder="Повторите пороль"
          className={module.passwordInput}
        />
      </div>
  );
}
export default RepeatPasswardInput
