import './App.css';
import logoin from "../src/image/login.png";
import password from "../src/image/password.png";
import phone from "../src/image/phone.png";
import globus from "../src/image/globus.png";
function App() {
    let showEntrySection = function(){
        let entrySection = document.querySelector('.entry')
        let registrantionSection = document.querySelector('.registrantion')
        let recoverySection = document.querySelector('.recovery')
        entrySection.style.display = 'block'
        registrantionSection.style.display = 'none'
        recoverySection.style.display = 'none'
    }
    let showRegistrantionSection = function(){
        let entrySection = document.querySelector('.entry')
        let registrantionSection = document.querySelector('.registrantion')
        let recoverySection = document.querySelector('.recovery')
        entrySection.style.display = 'none'
        registrantionSection.style.display = 'block'
        recoverySection.style.display = 'none'
    }
    let showRecoverySection = function(){
        let entrySection = document.querySelector('.entry')
        let registrantionSection = document.querySelector('.registrantion')
        let recoverySection = document.querySelector('.recovery')
        entrySection.style.display = 'none'
        registrantionSection.style.display = 'none'
        recoverySection.style.display = 'block'
    }
  return(
    <section className='registaration-section wrapper'>
        <div className='registaration-section_container'>
            <div className='registaration-section_main-block'>
                <h1>Календарь</h1>
                <div className='registaration-section_input-buttons'>
                    <button className='input-button' onClick={showEntrySection}>Вход</button>
                    <button className='registration-button' onClick={showRegistrantionSection}>Регистрация</button>
                    <button className='foget-password-button' onClick={showRecoverySection}>Забыли пороль</button>
                </div>

                <div className='registaration-section_user-data entry'>
                    <div className='login-input_container'>
                        <img src={logoin}/>
                        <input type="text" placeholder="Логин" className='login-input'/>
                    </div>
                    <div className='password-input_container'>
                    <img src={password}/>
                        <input type="password" placeholder="Пороль"  className='password-input'/>
                    </div>
                    <div className='remember-me_cotainer'>
                        <input type="checkbox" id="remember-me"/>
                        <laber for="remember-me">Запомнить меня</laber>
                    </div>
                    <button className='entry-button'>Войти</button>
                </div>

                <div className='registaration-section_user-data registrantion'>
                    <input type="text" placeholder="Номер телефона"  className='password-input'/>
                    <input type="password" placeholder="Пороль"  className='password-input'/>
                    <input type="password" placeholder="Подтвердите пороль"  className='password-input'/>
                    <button className='registaration-button'>Зарегистрироваться</button>
                </div>

                <div className='registaration-section_user-data recovery'>
                    <div className='recovery-input_container'>
                        <img src={phone}/>
                        <input type="text" placeholder="Номер телефона" className='recovery-input'/>
                    </div>

                    <button className='registaration-button'>Продолжить</button>
                </div>

            </div>
            <div className='change-languageicon'><img src={globus}/></div>
            <div className='questions-icon'>?</div>
        </div>
    </section>
  )
}
export default App;
