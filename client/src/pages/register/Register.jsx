import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import "./register.scss"
import axios from "axios";
import { AuthContext } from "../../context/authContext";

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
      });
      const [err, setErr] = useState(null);
      const [validationErrors, setValidationErrors] = useState({});
      const navigate = useNavigate();
      const { login } = useContext(AuthContext);

      const validateInputs = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(inputs.email)) {
          errors.email = "Please enter a valid email address";
        }
        
        if (inputs.password.length < 8) {
          errors.password = "Password must be at least 8 characters long";
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
      };

      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        // Clear validation error when user starts typing
        if (validationErrors[e.target.name]) {
          setValidationErrors(prev => ({ ...prev, [e.target.name]: null }));
        }
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        
        if (!validateInputs()) {
          return;
        }
    
        try {
          await axios.post("http://localhost:8800/api/auth/register", inputs);
          // After successful registration, log in the user
          await login({ username: inputs.username, password: inputs.password });
          navigate("/");
        } catch (err) {
          setErr(err.response.data);
        }
      };

    return (
        <div className = 'register'>
            <div className='card'>
                <div className = 'left'> 
                    <h1>Dreamer's Journal</h1>
                    <p> 
                        Nice to meet you  <br/>
                         </p>
                    <span>Have an account?</span>
                    <Link to = "/login">
                    <button>Login</button>
                    </Link>
                    
                </div>
                <div className = 'right'>
                <h1>Register here!</h1>
                <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            {validationErrors.email && <span className="error">{validationErrors.email}</span>}
            <input
              type="password"
              placeholder="Password (min. 8 characters)"
              name="password"
              onChange={handleChange}
            />
            {validationErrors.password && <span className="error">{validationErrors.password}</span>}
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            {err && <span className="error">{err}</span>}
            <button onClick={handleClick}>Register</button>
          </form>
            </div>
        </div>
            
    </div>

    );
};

export default Register