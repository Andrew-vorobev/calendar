import React from 'react';
import module from "./registrationSection__buttons.module.css"
import RegistrationButton from './registrationButton/registrationButton';
import InputButton from './inputButton/inputButton';
import FogetPasswordButton from './fogetPasswordButton/fogetPasswordButton';

function RegistrationSectionButtons(){
    return(
        <div className={module.registarationSection__buttons}>
            <InputButton/>
            <RegistrationButton/>
            <FogetPasswordButton/>
        </div>
    )
}
export default RegistrationSectionButtons