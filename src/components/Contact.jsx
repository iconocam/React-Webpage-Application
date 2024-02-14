import './Contact.css'
const Contact = () => {
    const contactInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+1 (123) 456-7890',
    };

    return (
        <div className="contact-container">
        <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Name: {contactInfo.name}</p>
            <p>Email: {contactInfo.email}</p>
            <p>Phone Number: {contactInfo.phoneNumber}</p>
        </div>
    
        <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
    
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
    
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
    
            <button type="submit">Send Message</button>
            </form>
        </div>
        </div>
    );
    };

export default Contact;