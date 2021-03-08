import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51GxLOeGwFplnm2QhH70z6GhsE2tKEPvIt7PEjBXcSb8qE1ZMhM44rLOo5AF9brptwgqEZ4U0C1EOkCrG5PLvno4500sPOQfNfN'
  const onToken = token => {
    console.log(token);
    alert ('Payment Sucessful');
  }

  return (
    <StripeCheckout
      label='Pay Now'x
      name='Demo Store'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;

