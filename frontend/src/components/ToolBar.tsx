import styled from "styled-components";
import ToolBarButton from "./ToolBarButton";
import { useAppContext } from "../AppContextProvider";

const ToolBar = () => {
    const { state, dispatch } = useAppContext();

    const toggleHistoryPanel = () => {
        dispatch({ type: "TOGGLE" });
    }

    return <StyledDiv>
        <ToolBarButton caption="New Script" onClick={()=>{}}></ToolBarButton>
        <ToolBarButton caption="Save Script" onClick={()=>{}}></ToolBarButton>
        <ToolBarButton caption={state.showHistory ? "Hide History" : "Show History"} onClick={toggleHistoryPanel}></ToolBarButton>
    </StyledDiv>
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`;

export default ToolBar;