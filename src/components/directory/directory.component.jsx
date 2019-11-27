import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import { DirectoryMenuStyle } from "./directory.styles.js";

const Directory = ({ sections }) => (
  <DirectoryMenuStyle>
    {sections.map(({ id, ...otherSectionrProps }) => (
      <MenuItem key={id} {...otherSectionrProps} />
    ))}
  </DirectoryMenuStyle>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
