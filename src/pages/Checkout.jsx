import { useSelector } from "react-redux";
import CommonSection from "../components/UI/common-section/CommonSection";
import { useState } from "react";

function Checkout() {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [enterPostal, setEnterPostal] = useState("");

  const shippingInfo = [];

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  function handleSubmit(e) {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: enterPostal,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  }

  return (
    <div>
      <CommonSection title="Checkout" />
      <div>
        <h6>Shipping address</h6>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              required
              onChange={(e) => setEnterName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your Email"
              required
              onChange={(e) => setEnterEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Country"
              required
              onChange={(e) => setEnterCountry(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="City"
              required
              onChange={(e) => setEnterCity(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Postal code"
              required
              onChange={(e) => setEnterPostal(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Phone Number"
              required
              onChange={(e) => setEnterNumber(e.target.value)}
            />
          </div>
        <button>Payment</button>
        </form>

        <h5>Subtotal: ${cartTotalAmount}</h5>
        <h5>Shipping: ${shippingCost}</h5>
        <h5>Total: ${totalAmount}</h5>
      </div>
    </div>
  );
}

export default Checkout;
