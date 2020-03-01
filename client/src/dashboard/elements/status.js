import styled from 'styled-components';

const status = styled.span`
  padding: 1px 5px !important;
  font-weight: 300 !important;
  margin-left: 30%;
  background-color: #ed8077;
  border-radius: 20px;
  ${(props) => (props.color ? `background-color: ${props.color};` : null)};
`;

export default status;
