import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItemStile,
  BackgroundImageStyle,
  ContentStyle,
  TitleStyle,
  SubtitleStyle
} from "./menu-item.styles.js";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemStile
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageStyle backgroundImage={imageUrl} />
    <ContentStyle>
      <TitleStyle>{title.toUpperCase()}</TitleStyle>
      <SubtitleStyle> SHOP NOW</SubtitleStyle>
    </ContentStyle>
  </MenuItemStile>
);

export default withRouter(MenuItem);
