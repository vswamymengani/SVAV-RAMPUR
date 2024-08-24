import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};

    if (!userId.trim()) {
      errors.userId = 'User ID is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // API request to login
        const response = await axios.post('https://www.svavrampur.com/api/login', {
          userid: userId,
          password: password,
        });

        // Handle successful login
        if (response.data.message === 'Login successful') {
          alert("Successfully logged in");
          navigate('/welcome');
        } else {
          setErrors({ login: 'Invalid username or password' });
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setErrors({ login: 'Error logging in, please try again' });
      }
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          {errors.userId && <p className="error">{errors.userId}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Login</button>
        
        {errors.login && <p className="error">{errors.login}</p>}
      </form>
    </div>
  );
};

export default Login;
