import styled from "styled-components";
import TextInputComponent from "./TextInputComponent";
import TextAreaComponent from "./TextAreaComponent";
import ToolBar from "./ToolBar";
import HistoryPanel from "./HistoryPanel";

const MainScreen = () => {
    return <StyledBackground>
        <StyledContainer>
            <ToolBar></ToolBar>
            <TextInputComponent width={'541px'} height={'40px'}></TextInputComponent>
            <TextInputComponent width={'541px'} height={'40px'}></TextInputComponent>
            <TextAreaComponent width={'541px'} height={'300px'}></TextAreaComponent>
            <a>Ask AI Helper</a>
        </StyledContainer>
        <StyledContainer>
            <HistoryPanel></HistoryPanel>
        </StyledContainer>
    </StyledBackground>
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