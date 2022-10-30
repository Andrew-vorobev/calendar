import React from 'react';
import './registarationSection__recovery.module.css';
import ContinueButton from './continueButton/continueButton';
import PhoneInput from './phoneInput/phoneInput'
function RegistarationSection__recovery(){
    return(
        <div className='recovery'>
            <PhoneInput/>
            <ContinueButton/>
        </div>
    )
}
export default RegistarationSection__recovery