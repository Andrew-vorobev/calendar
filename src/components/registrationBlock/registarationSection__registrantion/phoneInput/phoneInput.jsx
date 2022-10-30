import React from "react";
import phone from"../../../../image/phone.png"
import module from "./phoneInput.module.css";
function PhoneInput() {
  return (
    <div className={module.phoneInput_container}>
        <img src={phone} alt="pop" />
        <input
          type="text"
          placeholder="Номер телефона"
          className={module.phoneInput}
        />
      </div>
  );
}
export default PhoneInput
