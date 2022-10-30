import React from "react";
import module from"./registrationSection_entry.module.css"
import LoginInput from "./loginInput/loginInput";
import PasswardInput from './passwordInput/passwordInput';
import RememberMeInput from './rememberMe/rememberMe';
import EntryButton from "./entryButton/entryButton";
function RegistarationSection__entry() {
  return (
    <div className={module.entrySection}>

      <LoginInput/>

      <PasswardInput/>

      <RememberMeInput/>
      <EntryButton/>
    </div>

  );
}
export default RegistarationSection__entry;
