import React from "react";

function ContactUs() {
  return (
    <div>
        <div>
      <h2>Contact Us</h2>
      <p>Have a question or feedback for us? Get in touch with our customer support team!</p>

      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Send</button>
      </form>

      <p>You can also reach us by phone or email:</p>
      <ul>
        <li>Phone: 1-800-TAKTAK</li>
        <li>Email: support@taktak.com</li>
      </ul>
    </div>  
    </div>
  );
}

export default ContactUs;