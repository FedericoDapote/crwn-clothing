import React from "react";
import StripeChekout from "react-stripe-checkout";

const StripeChekoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicshableKey = "pk_test_t8yu6alSmP3PUHEtwSOkgsWL007Tst4B4x";

  const onToken = token => {
    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeChekout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicshableKey}
    />
  );
};

export default StripeChekoutButton;
