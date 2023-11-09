import React, { useState } from 'react'
import ButtonYellow from '../Generics/ButtonYellow'
import { ErrorMessage, useFormik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'


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
            .required("Förnamn måste anges")
            .min(2, "Förnamnet måste bestå av minst 2 tecken"),
            email: Yup.string()
            .required("E-postadress måste anges")
            .matches(emailRegex, "E-postadressen måste vara giltig"),
        }),

        onSubmit: async (values) => {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            switch (result.status) {
                case 200:
                    clearForm();
                    setReturnMessage('Formuläret har skickats');
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


    const clearForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className="form-wrapper">
            <form id="form" onSubmit={form.handleSubmit} noValidate>
                <p className="errorMessage">{errorMessage}</p>
                <p className="returnMessage">{returnMessage}</p>

                <div className="mb-3">
                    <label for="name">
                    {form.errors.name && form.touched.name ? form.errors.name: ''}</label>
                    <input id="name" type="text" name="name" placeholder="Name*" className="form-input p-2" tabindex="1" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur} />
                </div>

                <div className="mb-3">
                    <label for="email">{form.errors.email && form.touched.email ? form.errors.email: ''}
                    </label>
                    <input id="email" type="email" name="email" placeholder="Email*" className="form-input p-2" tabindex="2" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur} />
                </div>

                <div className="mb-3">
                    <label for="message">{form.errors.message && form.touched.message ? form.errors.message: ''}
                    </label>
                    <textarea name="message" id="message" placeholder="Your Message*" className="form-input p-2" tabindex="3" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur} ></textarea>
                </div>

                {/* <ButtonYellow text="Send Message" url="#"/> */}
                <a href="#"><button class="btn-yellow btn btn-warning form-input" type="submit">Send Message<i class="fa-regular fa-arrow-up-right"></i></button></a>
            </form>
        </div>
    )
}

export default FormComponent