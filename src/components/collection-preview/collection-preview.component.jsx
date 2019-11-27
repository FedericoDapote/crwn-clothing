import React from "react";

import CollectionItem from "../collection-items/collection-item.component";

import {
  CollectionPreviewStyle,
  Title,
  Preview
} from "./collection-preview.styles.js";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewStyle>
    <Title>{title.toUpperCase()}</Title>
    <Preview>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </CollectionPreviewStyle>
);

export default CollectionPreview;
