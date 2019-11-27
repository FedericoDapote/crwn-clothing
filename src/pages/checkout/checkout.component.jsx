import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  CheckoutPageStyle,
  CheckoutHeaderStyle,
  TotalStyle,
  TestWarningStyle,
  HeaderBlockStyle
} from "./checkout.styles.js";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selector";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageStyle>
    <CheckoutHeaderStyle>
      <HeaderBlockStyle>
        <span>Product</span>
      </HeaderBlockStyle>
      <HeaderBlockStyle>
        <span>Description</span>
      </HeaderBlockStyle>
      <HeaderBlockStyle>
        <span>Quantity</span>
      </HeaderBlockStyle>
      <HeaderBlockStyle>
        <span>Price</span>
      </HeaderBlockStyle>
      <HeaderBlockStyle>
        <span>Remove</span>
      </HeaderBlockStyle>
    </CheckoutHeaderStyle>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalStyle>TOTAL: ${total}</TotalStyle>
    <TestWarningStyle>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - exp: 01/20 - CVV: 123
    </TestWarningStyle>
    <StripeCheckoutButton price={total} />
  </CheckoutPageStyle>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
