import React, { useState } from 'react'
import Contact from './Contact';

const PhoneOtpForm = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput , setShowOtpInput] = useState(false);


    const handlePhone = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // validations
        const regex = /[^0-9]/g;
        if(phoneNumber.length < 10 || regex.test(phoneNumber)){
            alert("Invalid phone number")
            return;
        }
        
        setShowOtpInput(true);
    }


  return (
    <>
    <section className='weather-container'>
      <div className='container'>
          
          <div className='title'>
            <h3 className='fw-bold'>OTP Generator</h3>
          </div>
            {
                !showOtpInput ? ( <form onSubmit={handleSubmit}>
                  <input 
                    type='text' 
                    value={phoneNumber} 
                    onChange={handlePhone} 
                    placeholder='Enter Phone Number'/>
                    
                    <button type='submit' className='clear-btn  mt-3 '> Submit </button>
                </form>) :( <div >
                    <p className='text-center'>Enter Otp sent to {phoneNumber}</p>
                    <Contact/>

                </div>)
            }

      </div>
    </section>
  </>
  )
}

export default PhoneOtpForm