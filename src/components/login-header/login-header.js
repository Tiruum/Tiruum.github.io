import React from 'react';
import './login-header.css';
const LoginLogo = () => {
    return (
        <div>
            <div className="position-relative top-0 start-50 translate-middle cls-1">
                <svg id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 49">
                    <defs>
                    </defs>
                    <path d="M420.73,282.36a2,2,0,1,0-2.69-.67A2,2,0,0,0,420.73,282.36Z"
                        transform="translate(-400.75 -273.23)" />
                    <path d="M415.35,283.18a1.39,1.39,0,1,0-1.9-.47A1.38,1.38,0,0,0,415.35,283.18Z"
                        transform="translate(-400.75 -273.23)" />
                    <path
                        d="M428.15,282.33a2.83,2.83,0,0,0-2.92-4.85,2.85,2.85,0,0,0-1,3.89A2.82,2.82,0,0,0,428.15,282.33Z"
                        transform="translate(-400.75 -273.23)" />
                    <path
                        d="M415.12,300.29l1.35-1.78c-5.12-2.15-9.56-4.61-10.27-7.37-.31-1.21.14-2.48,1.36-3.9a12.87,12.87,0,0,1,4.33-3.05l-.86-2a15,15,0,0,0-5.09,3.62c-1.7,2-2.31,3.93-1.81,5.85C405,295.22,409.55,297.91,415.12,300.29Z"
                        transform="translate(-400.75 -273.23)" />
                    <path
                        d="M430.94,322.11l8.28-48.88-38.47,48.95h0a20.21,20.21,0,0,1,30.15-.07Zm-7.34-13.67a5.23,5.23,0,1,1,6.8-2.9A5.24,5.24,0,0,1,423.6,308.44Z"
                        transform="translate(-400.75 -273.23)" />
                    <path
                        d="M440,309.89a13.43,13.43,0,0,0-4.48-3.19l-.33,2a10.85,10.85,0,0,1,3.37,2.48c1.08,1.25,1.48,2.37,1.2,3.45-.5,2-3.13,3.74-6.48,5.35l-.39,2.29c4.45-2,8-4.25,8.71-7.17C442,313.36,441.5,311.62,440,309.89Z"
                        transform="translate(-400.75 -273.23)" />
                </svg>
            </div>
            <div className="position-relative mb-4">
                <h3 className="text-center">Добро пожаловать!</h3>
                <h6 className="text-muted text-center">Введите свои данные ниже!</h6>
            </div>
        </div>
    );
};

export default LoginLogo;