import React from "react";

import {
  CartItemStyle,
  ImageStyle,
  ItemDetailsStyle,
  NameStyle
} from "./cart-item.styles.js";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemStyle>
    <ImageStyle src={imageUrl} alt="item" />
    <ItemDetailsStyle>
      <NameStyle>{name}</NameStyle>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetailsStyle>
  </CartItemStyle>
);

export default CartItem;
