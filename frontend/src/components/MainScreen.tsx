import styled from "styled-components";
import TextInputComponent from "./TextInputComponent";
import TextAreaComponent from "./TextAreaComponent";
import ToolBar from "./ToolBar";

const MainScreen = () => {
    return <StyledBackground>
        <ToolBar></ToolBar>
        <TextInputComponent width={'541px'} height={'40px'}></TextInputComponent>
        <TextInputComponent width={'541px'} height={'40px'}></TextInputComponent>
        <TextAreaComponent width={'541px'} height={'300px'}></TextAreaComponent>
        <a>Ask AI Helper</a>
    </StyledBackground>
}

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e8ebe0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  align-self: center;
  padding-left: 25px;
  padding-top: 40px;
`;

export default MainScreen;