import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainerStyle,
  ImageContainerStyle,
  NameStyle,
  QuantityStyle,
  PriceStyle,
  ArrowStyle,
  ValueStyle,
  RemoveStyle
} from "./checkout-item.styles.js";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainerStyle>
      <ImageContainerStyle>
        <img src={imageUrl} alt="item" />
      </ImageContainerStyle>
      <NameStyle>{name}</NameStyle>
      <QuantityStyle>
        <ArrowStyle onClick={() => removeItem(cartItem)}>&#10094;</ArrowStyle>
        <ValueStyle>{quantity}</ValueStyle>
        <ArrowStyle onClick={() => addItem(cartItem)}>&#10095;</ArrowStyle>
      </QuantityStyle>
      <PriceStyle>{price}</PriceStyle>
      <RemoveStyle onClick={() => clearItem(cartItem)}>&#10005;</RemoveStyle>
    </CheckoutItemContainerStyle>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
