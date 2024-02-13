const Contact = () => {
    const contactInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+1 (123) 456-7890',
    };

    return (
    <div>
        <h2>Contact Information</h2>
        <p>Name: {contactInfo.name}</p>
        <p>Email: {contactInfo.email}</p>
        <p>Phone Number: {contactInfo.phoneNumber}</p>
    </div>
    );
};

export default Contact;