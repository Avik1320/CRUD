import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Image1 from '../../Assests/Login.jpg';


const Login = ({ setIsAuthenticated }) => {
  const adminEmail = 'admin@example.com';
  const adminPassword = 'qwerty';

  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('qwerty');

  const handleLogin = e => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem('is_authenticated', true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Incorrect email or password.',
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <>
      <div style={{display: "flex", justifyContent:"center", alignItems:"center" }}>
        <div className="left">
          
            <img src={Image1} alt="" className='LoginPic' />
          
        </div>
        <div className="small-container">
          <form onSubmit={handleLogin} className='form-main'>
            <h1>Admin Login</h1>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="admin@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="qwerty"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <input style={{ marginTop: '12px' }} type="submit" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
