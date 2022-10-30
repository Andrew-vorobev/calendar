import React from 'react';
import module from'./registarationSection__registrantion.module.css';
import PasswardInput from './passwordInput/passwordInput';
import RepeatPasswardInput from './repeatPasswordInput/repeatPasswordInput';
import RegistarationButton from "./registrationButton/registrationButton"
import PhoneInput from './phoneInput/phoneInput';
function RegistarationSection__registrantion(){
    return(
        <div className={module.registrantion}>
            <PhoneInput/>
            <PasswardInput/>
            <RepeatPasswardInput/>
            <RegistarationButton/>
        </div>
    )
}
export default RegistarationSection__registrantion