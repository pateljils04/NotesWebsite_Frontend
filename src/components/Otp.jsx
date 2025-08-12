import axios from 'axios';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import '../style/Otp.css';
import { toast } from 'react-toastify';

export default function Otp() {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const handelVerify = () => {
        // console.log(otp)

        axios.post("http://localhost:8080/user/activation", { otp }, {
            withCredentials: true
        }).then((res) => {
            console.log(res.data.message)
            toast(res.data.message)
            navigate("/login");
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="otp-container">
            <div className="otp-header">
                <h2>OTP Verification</h2>
                <p>Hello Tsstudio,</p>
                <p>
                    Thank you for registering with us. Please type the OTP as shared on your mobile <strong>XXXXXXX123</strong>
                </p>
            </div>
            
            <div className='otp-inputs'>
                <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
            />
            </div>

            <button className="otp-submit" onClick={handelVerify}>Verify</button>
        </div>
    );
}

