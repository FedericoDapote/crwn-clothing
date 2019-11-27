import styled from "styled-components";
import "./checkout-item.component";

export const CheckoutItemContainerStyle = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  transition: 0.5s;
`;
export const ImageContainerStyle = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const NameStyle = styled.span`
  width: 23%;
`;
export const QuantityStyle = styled.span`
  width: 23%;
  display: flex;
`;
export const PriceStyle = styled.span`
  width: 23%;
`;
export const ArrowStyle = styled.div`
  cursor: pointer;
`;

export const ValueStyle = styled.span`
  margin: 0 10px;
`;

export const RemoveStyle = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
