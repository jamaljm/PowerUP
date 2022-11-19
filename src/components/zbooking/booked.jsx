import React, { useState, useEffect } from "react";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/ZIW9a8W.png"
        alt="MALL NAME"
      />
      <div className="description">
      <h3>MALL NAME</h3>
      <h5>₹250.00</h5>
      </div>
    </div>
    <form>
      <button type="submit">
        <a href="https://lesgrandestables.com/wp-content/uploads/2020/10/qr-code-1-scaled.jpg" >
        BOOK NOW
        </a>
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Booked() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}