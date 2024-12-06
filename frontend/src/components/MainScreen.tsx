import styled from "styled-components";
import TextInputComponent from "./TextInputComponent";
import TextAreaComponent from "./TextAreaComponent";
import ToolBar from "./ToolBar";
import HistoryPanel from "./HistoryPanel";
import { useAppContext } from "../AppContextProvider";

const MainScreen = () => {
    const { state } = useAppContext();
    return (
            <StyledBackground>
                <StyledContainer>
                    <ToolBar></ToolBar>
                    <TextInputComponent value={state.currentScript.title} width={'541px'} height={'40px'} placeholder="script name"></TextInputComponent>
                    <TextInputComponent value={state.currentScript.description} width={'541px'} height={'40px'} placeholder="script description"></TextInputComponent>
                    <TextAreaComponent value={state.currentScript.code} width={'541px'} height={'300px'}></TextAreaComponent>
                    <a>Ask AI Helper</a>
                </StyledContainer>
                <StyledContainer>
                    {state.showHistory && <HistoryPanel />}
                </StyledContainer>
            </StyledBackground>
    )
}

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e8ebe0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  align-self: flex-start;
  padding-left: 25px;
`;

const StyledContainer = styled.div`
    width: 100%;
  height: 100%;
  background-color: #e8ebe0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  align-self: center;
  padding-left: 25px;
  margin-top: 40px;
`

export default MainScreen;