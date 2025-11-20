import React from 'react';

function LoginRegister() {
    function SwitchContent() {
        const content = document.getElementById('content');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        registerBtn.addEventListener('click', () => {
            content.classList.add('active');
        });
        loginBtn.addEventListener('click', () => {
            content.classList.remove('active');
        });
    }

  return (
    <div className='content justify-content-center align-items-center d-flex shadow-lg' id='content'>
        {/* Register */}
        <div className='col-md-5 d-flex justify-content-center'>
            <form>
                <div className='header-text mb-4'>
                    <h1>Register Your Account</h1>
                </div>
                <div className='input-group mb-3'>
                    <input type="text" className='form-control form-control-lg bg-light fs-6' placeholder='First Name' />
                </div>
                <div className='input-group mb-3'>
                    <input type="text" className='form-control form-control-lg bg-light fs-6' placeholder='Last Name' />
                </div>
                <div className='input-group mb-3'>
                    <input type="email" className='form-control form-control-lg bg-light fs-6' placeholder='Email' />
                </div>
                <div className='input-group mb-3'>
                    <input type="password" className='form-control form-control-lg bg-light fs-6' placeholder='Password' />
                </div>
                <div className='input group mb-3 justify-content-center'>
                    <button className='btn border-white text-white w-50 fs-6'>Register</button>
                </div>
            </form>
        </div>

        {/* Login */}
        <div className='col-md-6 right-box d-flex justify-content-center'>
            <form>
                <div className='header-text mb-4'>
                    <h1>Login Your Account</h1>
                </div>
                <div className='input-group mb-3'>
                    <input type="email" className='form-control form-control-lg bg-light fs-6' placeholder='Email' />
                </div>
                <div className='input-group mb-3'>
                    <input type="password" className='form-control form-control-lg bg-light fs-6' placeholder='Password' />
                </div>

                <div className='input-group mb-3 justify-content-center'>
                    <button className='btn border-white text-white w-50 fs-6'>Login</button>
                </div>
            </form>
        </div>

        {/* Divider */}
        <div className='switch-content'>
            <div className='switch'>
                <div className='switch-panel switch-left'>
                    <h1>Hello, Again</h1>
                    <p>We are happy to see you back</p>
                    <button className='hidden btn text-white w-50 fs-6' id='login' onClick={SwitchContent}>Login</button>
                </div>
                <div className='switch-panel switch-right'>
                    <h1>Welcome</h1>
                    <p>Looking For Cyborg Parts? Explore Our Selling Platform!</p>
                    <button className='hidden btn text-white w-50 fs-6'id='register'onClick={SwitchContent}>Register</button>
                </div>
            </div>
        </div>



    </div>



  )
}

export default LoginRegister;