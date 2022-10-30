import React from 'react';
import '../../App.css';
// import globus from "../../image/globus.png";
import Title from './title/title';
import RegistrationSectionButtons from"./registrationSection__buttons/registrationSection__buttons"
import RegistarationSection__entry from './registarationSection__entry/registarationSection__entry';
import RegistarationSection__registrantion from './registarationSection__registrantion/registarationSection__registrantion';
import RegistarationSection__recovery from './registarationSection__recovery/registarationSection__recovery';
function result(){
    return(
        <section className='registaration-section wrapper'>
            <div className='registaration-section_container'>
                <div className='registaration-section_main-block'>
                    <Title/>
                    <RegistrationSectionButtons/>
    
                    <RegistarationSection__entry/>
    
                    <RegistarationSection__registrantion/>
    
                    <RegistarationSection__recovery/>
    
                </div>
                {/* <div className='change-languageicon'><img src={globus}  alt="pop"/></div>
                <div className='questions-icon'>?</div> */}
            </div>
        </section>
      )
}
export default result;