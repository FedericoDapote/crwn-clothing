import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import {
  CartIconStyle,
  ShopptingIconStyle,
  ItemCountStyle
} from "./cart-icon.styles.js";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconStyle onClick={toggleCartHidden}>
    <ShopptingIconStyle />
    <ItemCountStyle>{itemCount}</ItemCountStyle>
  </CartIconStyle>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
