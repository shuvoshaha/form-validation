import React from 'react';
//import { Link } from 'react-router-dom';
import useForm from './useForm';
import validate from './ValidateInfo';

export default function FormSingUp(submited) {
    const { handleChange, values, handleSubmit, error } = useForm(validate);
    return (
        <div className="form-content-right">
            <div className="form" onSubmit={handleSubmit}>
                <form className="form-field">
                    <h1 className="form-header">Get started with Us!
                     Create your account by filling out the information bellow </h1>
                     <div className="form-inputs">
                         <label htmlFor="username">
                         Username
                         </label>
                         <input 
                         type="text"
                         className="form-input-field"
                         placeholder="Username"
                         name="username" 
                         value={values.username}
                         onChange={handleChange}
                        />
                        { error.username && <p className="error-msg"> {error.username} </p> }
                     </div>
                     <div className="form-inputs">
                         <label htmlFor="email">
                         Email
                         </label>
                         <input 
                         type="email"
                         className="form-input-field"
                         placeholder="Email"
                         name="email" 
                         value={values.email}
                         onChange={handleChange}
                         />
                         { error.email && <p className="error-msg">{error.email}</p>}
                     </div>
                     <div className="form-inputs">
                         <label htmlFor="password">
                         Password
                         </label>
                         <input 
                         type="password"
                         className="form-input-field"
                         placeholder="Password"
                         name="password" 
                         onChange={handleChange}
                         value={values.password}
                        />
                         { error.password && <p className="error-msg"> {error.password} </p> }
                     </div>
                     <div className="form-inputs">
                         <label htmlFor="password2">
                         Comfirm Password
                         </label>
                         <input 
                         type="password"
                         className="form-input-field"
                         placeholder="Comfirm Password"
                         name="password2" 
                         onChange={handleChange}
                         value={values.password2}
                        />
                         { error.password2 && <p className="error-msg"> {error.password2} </p> }
                     </div>
                     <button
                     type="submit"
                     className="signup-btn"
                     >
                      Sign Up   
                     </button>
                     <span className="form-input-login">
                      Allreay have an account Login 
                      <a href="#">
                       here   
                      </a>
                     </span>

                </form>
            </div>
        </div>
    )
}
