import React, {  useState } from 'react'
const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };
const ContactMe = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e: any) => {
      e.preventDefault();
      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact', ...formData }),
        });
        alert('Success!');
      } catch (error) {
        alert(error);
      }
    };
  
    const handleChange = (e: any) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const { name, email, message } = formData;
  
    return (
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Your Name: <input type="text" name="name" value={name} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" value={email} onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" value={message} onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  
}

export default ContactMe