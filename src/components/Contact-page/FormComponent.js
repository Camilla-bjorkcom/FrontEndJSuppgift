import React, { useState } from 'react'
import ButtonYellow from '../Generics/ButtonYellow'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'


const FormComponent = () => {
    const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

    const [errorMessage, setErrorMessage] = useState('')
    const [returnMessage, setReturnMessage] = useState('');

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },

        validationSchema: Yup.object( {
            name: Yup.string()
            .required("Name is required")
            .min(2, "Must contain atleast two letters"),
            email: Yup.string()
            .required("Email is required")
            .matches(emailRegex, "The email must be valid"),
            message: Yup.string()
            .required("Enter a message")
        }),

        onSubmit: async (values) => {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            console.log(values)

            switch (result.status) {
                case 200:
                    displayMessage();
                    form.resetForm();
                    setReturnMessage('Contact form has been received');
                    break;
                case 400:
                    setErrorMessage(`något har gått fel. Felmeddelandet är: ${await result.text()}`)
                    break;
                case 409:
                    setErrorMessage(`något har gått fel. Felmeddelandet är: ${await result.text()}`)
                    break;
            }

        }
    })



const displayMessage = () => {
    // return active(true);
}

    // const clearForm = () => {
    //     setName('');
    //     setEmail('');
    //     setMessage('');
    // }
    // ${active ? '' : 'd-none'}
    return (
        <div className="form-wrapper">
            <form id="form" onSubmit={form.handleSubmit} noValidate>
                <p className="errorMessage">{errorMessage}</p>
                <p className={`returnMessage `}>{returnMessage}</p>

                <div className="mb-3">
                    <label htmlFor="name">
                    {form.errors.name && form.touched.name ? form.errors.name: ''}</label>
                    <input id="name" type="text" name="name" placeholder="Name*" className="form-input p-2" tabIndex="1" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} />
                </div>

                <div className="mb-3">
                    <label htmlFor="email">{form.errors.email && form.touched.email ? form.errors.email: ''}
                    </label>
                    <input id="email" type="email" name="email" placeholder="Email*" className="form-input p-2" tabIndex="2" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} />
                </div>

                <div className="mb-3">
                    <label htmlFor="message">{form.errors.message && form.touched.message ? form.errors.message: ''}
                    </label>
                    <textarea name="message" id="message" placeholder="Your Message*" className="form-input p-2" tabIndex="3" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur} ></textarea>
                </div>

                {/* <ButtonYellow text="Send Message" url="#"/> */}
                <Link to="#"><button className="btn-yellow btn btn-warning form-input" type="submit">Send Message<i className="fa-regular fa-arrow-up-right"></i></button></Link>
            </form>
        </div>
    )
}

export default FormComponent