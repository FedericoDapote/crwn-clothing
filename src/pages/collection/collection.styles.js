import styled from "styled-components";
import CollectionItem from "../../components/collection-items/collection-item.component";

export const CollectionStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleStyle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;
export const CollectionItemStyled = styled(CollectionItem)`
  margin-bottom: 30px;
`;

export const ItemStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;
