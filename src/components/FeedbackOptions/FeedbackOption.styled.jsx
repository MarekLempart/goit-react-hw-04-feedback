import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const bgrColor = props => {
  switch (props.hoverType) {
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

export const Button = styled.button`
  text-transform: capitalize;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  padding: 10px 25px;
  margin: 5px;
  border-width: 3px;
  border-radius: 15px;
  &:hover {
    box-shadow: 0 10px 15px -1px #33333340;
    background-color: ${bgrColor};
  }
`;
