import React from "react";

import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import {
  TitleStyle,
  ItemStyle,
  CollectionItemStyled,
  CollectionStyle
} from "./collection.styles.js";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionStyle>
      <TitleStyle>{title}</TitleStyle>
      <ItemStyle>
        {items.map(item => (
          <CollectionItemStyled key={item.id} item={item} />
        ))}
      </ItemStyle>
    </CollectionStyle>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
