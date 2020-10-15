import { useState, useEffect } from 'react';

  const useForm = (validate, submited) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    });
    const [error, setError]= useState({})
    const [isSubmited, setSubmited] = useState(false);
    //Get data from input field
    const handleChange = (e) =>{
        e.preventDefault();
        const { name, value } = e.target;
        setValues({
            ...values,
            [name] : value
        });
	e.target.reset()
    }
    //Submit data for validation
    const handleSubmit = (e) =>{
        e.preventDefault();
        setError(validate(values));
        setSubmited(submited)
    }
    //return data to root directory
    return  { handleChange, values, handleSubmit, error }
}
export default useForm;