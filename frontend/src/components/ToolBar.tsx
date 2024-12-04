import styled from "styled-components";
import ToolBarButton from "./ToolBarButton";

const ToolBar = () => {
    return <StyledDiv>
        <ToolBarButton caption="New Script" onClick={()=>{}}></ToolBarButton>
        <ToolBarButton caption="Save Script" onClick={()=>{}}></ToolBarButton>
        <ToolBarButton caption="Show History" onClick={()=>{}}></ToolBarButton>
    </StyledDiv>
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`;

export default ToolBar;