import React, {useState} from 'react'
import ButtonYellow from '../Generics/ButtonYellow'


const FormComponent = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [returnMessage, setReturnMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        const message = {name, email, message};
        const json = JSON.stringify(message);

        const result = await fetch ('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: json
        })

        switch (result.status) {
            case 200:
                setReturnMessage('meddelandet togs emot');
                break;
            case 400:
                setErrorMessage(`något har gått fel. Felmeddelandet är ${await result.text()}`)
                break;
            case 409:
                setErrorMessage(`något har gått fel. Felmeddelandet är ${await result.text()}`)
                break;
        }
    }
   

  return (
    <div className="form-wrapper">
    <form id="form" onSubmit={handleSubmit} noValidate>
        <p className="errorMessage">{errorMessage}</p>
        <p className="returnMessage">{returnMessage}</p>
        <div className="mb-3">
            <label for="name">
            </label>
            <input id="name" type="text" name="Name" placeholder="Name*" className="form-input p-2" tabindex="1" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="mb-3">
            <label for="email">
            </label>
            <input id="email" type="email" name="Email" placeholder="Email*" className="form-input p-2" tabindex="2" value={email} onChange={(e) => setEmail(e.target.value)}  />
        </div>

        <div className="mb-3">
            <label for="message">
            </label>
            <textarea name="message" id="message" placeholder="Your Message*" className="form-input p-2" tabindex="3"value={message} onChange={(e) =>setMessage(e.target.value)} ></textarea>
        </div>

        {/* <ButtonYellow text="Send Message" url="#"/> */}
        <a href="#"><button class="btn-yellow btn btn-warning form-input" type="submit">Send Message<i class="fa-regular fa-arrow-up-right"></i></button></a>
    </form>
</div>
  )
}

export default FormComponent