import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;

export const ImageStyle = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  transition: 0.5s;
  background-image: url(${props => props.backgroundImage});
  ${CollectionItemContainer}:hover & {
    opacity: 0.8;
  }
`;

export const CustomButtonStyle = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  ${CollectionItemContainer}:hover & {
    opacity: 0.85;
    display: flex;
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameStyle = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceStyle = styled.span`
  width: 10%;
`;
