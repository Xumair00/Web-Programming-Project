import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import sendCircle from '@iconify/icons-mdi/send-circle';
import './form.css';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";


const formInputs = [
  { id: 'name',
    type: 'text',
    label: 'Your name',
    placeholder: 'John Doe' },
  {
    id: 'phone',
    type: 'phone',
    label: 'Phone number',
    placeholder: '03001234567',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'example@gmail.com',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Your message',
    placeholder: 'How can we help you? let us know!',
  },
];

const Form = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event)  => {
    
    console.log('Sending message:', formState);
    
    const isFormFilled = Object.values(formState).every((value) => value.trim() !== '');

    if (!isFormFilled) {
      alert('Please fill all fields.');
      return;
    }
    const userObj = await axios.post('http://localhost:5050/user/addtoComplain', formState);
    const msg = await axios.post('http://localhost:5050/email/contactUser', formState);

    if (userObj.status === 200) {
      alert('Thank you for contacting us!');

      // Clear the form
      setFormState({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    }
    
    console.log(formState);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-h2">Send us a message</h2>
      <p className="form-p"> Fill out the form below if you have any issues or feedback or want to update your profile i.e name,email etc and we will get back to you as soon as possible.</p>

      {formInputs.map((input) => (
        <label key={input.label} id={input.id} className="form-label">
          {input.label}

          {input.type === 'textarea' ? (
            <textarea
              className="form-textarea"
              placeholder={input.placeholder}
              id={input.id}
              value={formState[input.id]}
              onChange={handleInputChange}
            />
          ) : (
            <input
              className="form-input"
              type={input.type}
              placeholder={input.placeholder}
              id={input.id}
              value={formState[input.id]}
              onChange={handleInputChange}
            />
          )}
        </label>
      ))}

      <button className="form-submit" type="submit" onSubmit={handleSubmit}>
        <Icon className="form-submit" icon={sendCircle}  />
      </button>
    </form>
  );
};

export default Form;