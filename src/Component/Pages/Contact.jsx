import React, { useState } from 'react'


const Contact = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [showPopup , setShowPopup] = useState(false)

  const handleOtpChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to the next field automatically
    if (value !== "" && index < otp.length - 1) {
      const nextField = document.getElementById(`otp-${index + 1}`);
      nextField?.focus();
    }
  };

  const handleOtpSubmit = () => {
    if (otp.every((digit) => digit !== "")) {
      setShowPopup(true);
      setOtp(new Array(4).fill("")); // Clear all OTP fields
    } else {
      alert("Please fill out all OTP fields.");
    }
  };

  return (
    <>
      <div className='app-box' >
          {
            otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                id={`otp-${index}`}
                value={digit}
                maxLength="1"
                onChange={(e) => handleOtpChange(index, e.target.value)}
              />
            ))
          }
      </div>
      <button type='submit' className='clear-btn  mt-3 ' onClick={handleOtpSubmit}>Submit OTP</button>

      {
        showPopup && ( 
          <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "20px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h3>Success!</h3>
          <p>Your OTP has been successfully submitted.</p>
          <button
            onClick={() => setShowPopup(false)}
            style={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>

        ) 
      }
    </>
  )
}

export default Contact ;