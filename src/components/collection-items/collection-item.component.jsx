import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  ImageStyle,
  CustomButtonStyle,
  CollectionFooterContainer,
  NameStyle,
  PriceStyle
} from "./collection-item.styles.js";

const CollectionItem = ({ item, addItem, ...props }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer {...props}>
      <ImageStyle backgroundImage={imageUrl} />
      <CollectionFooterContainer>
        <NameStyle> {name} </NameStyle>
        <PriceStyle> {price} </PriceStyle>
      </CollectionFooterContainer>
      <CustomButtonStyle onClick={() => addItem(item)} inverted>
        {" "}
        Add to cart{" "}
      </CustomButtonStyle>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
