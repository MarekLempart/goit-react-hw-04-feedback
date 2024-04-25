import styled from '@emotion/styled';

export const Numbers = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

const bgrColor = props => {
  switch (props.categoryName) {
    case 'good':
      return `#228b228c;`;
    case 'neutral':
      return `#ff8c008c;`;
    case 'bad':
      return `#dc143c8c;`;
    default:
      console.log('Invalid subscription type');
  }
};

export const Category = styled.p`
  display: block;
  text-transform: capitalize;
  font-size: 20px;
  margin: 10px;
  padding: 20px;
  width: 300px;
  border-radius: 20px;
  background-color: ${bgrColor};
`;
