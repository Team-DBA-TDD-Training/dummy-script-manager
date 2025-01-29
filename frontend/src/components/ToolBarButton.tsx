import styled from "styled-components";
export interface ButtonProps {
  caption: string;
  className?: string;
  onClick: () => void;
}
const ToolBarButton = ({ caption, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{caption}</StyledButton>
}

const StyledButton = styled.button`
  width: 130px;
  height: 40px;
  margin: 5px;
  border-radius: 20px;
  border: 1px solid #5B5E4E;
  background-color: #5B5E4E;
  border-color: #5B5E4E;
  color: white; 
  font-size: 14px; 
  font-weight: 500;
  cursor: pointer;
  outline: none; 
  transition: background-color 0.3s ease, color 0.3s ease; 

  &:hover {
    background-color: #878b77; 
    color: white; 
    border-color: #5B5E4E;
  }

  &:active {
    background-color: #5B5E4E; 
    color: white; 
    border-color: #5B5E4E;
  }
`;

export default ToolBarButton;
