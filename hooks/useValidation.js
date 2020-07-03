import { useState, useEffect } from 'react'


const useValidation = (initialState, validate, fn) => {
    
    
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if(submitForm){
            const noErrors = Object.keys(errors).length === 0;

            if (noErrors){
                fn(); //Function from com´ponent
            }

            setSubmitForm(false);
        }
    }, [errors]);

    // User inputs
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    // User submits
    const handleSubmit = e => {
        e.preventDefault();

        const errorsValidation = validate(values);
        setErrors(errorsValidation);
        setSubmitForm(true);
    }

    const handleBlur = () =>{
        const errorsValidation = validate(values);
        setErrors(errorsValidation);
    }
    return {
        values,
        errors,
        handleSubmit,
        handleChange,
        handleBlur
    };
}
 
export default useValidation;