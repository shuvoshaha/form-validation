import React, { useState } from 'react';
import SignUpForm from './FormSignUp';
import SuccessPage, { FormSuccess } from './FormSuccess';

 const Form = () => {
    const [ isSubmited, setSubmited ] = useState(false);

    function submited(){
        setSubmited(true);
    }
    return (
        <div className="form-container">
            <div className="form-left-content">
                <div className="img-bg"></div>
            </div>
            { isSubmited ?  <FormSuccess /> : <SignUpForm obj={submited} />}
        </div>
    )
}
export default Form;
