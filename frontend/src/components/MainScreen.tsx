import styled from "styled-components";
import TextInputComponent from "./TextInputComponent";
import TextAreaComponent from "./TextAreaComponent";
import ToolBar from "./ToolBar";
import HistoryPanel from "./HistoryPanel";
import { useAppContext } from "../AppContextProvider";

const MainScreen = () => {
  const { state, dispatch } = useAppContext();
  const handleScriptTitle = (value: string) => {
    dispatch({
      type: "SET_CURRENT_SCRIPT",
      payload: { ...state.currentScript, title: value },
    });
  };
  const handleScriptDescription = (value: string) => {
    dispatch({
      type: "SET_CURRENT_SCRIPT",
      payload: { ...state.currentScript, description: value },
    });
  };
  const handleScriptCode = (value: string) => {
    dispatch({
      type: "SET_CURRENT_SCRIPT",
      payload: { ...state.currentScript, code: value },
    });
  };

  return (
    <StyledBackground>
      <StyledContainer>
        <ToolBar></ToolBar>
        <TextInputComponent
          onChange={handleScriptTitle}
          value={state.currentScript.title}
          width={"541px"}
          height={"40px"}
          placeholder="script name"
        ></TextInputComponent>
        <TextInputComponent
          onChange={handleScriptDescription}
          value={state.currentScript.description}
          width={"541px"}
          height={"40px"}
          placeholder="script description"
        ></TextInputComponent>
        <TextAreaComponent
          onChange={handleScriptCode}
          value={state.currentScript.code}
          width={"541px"}
          height={"300px"}
        ></TextAreaComponent>
        <a>Ask AI Helper</a>
      </StyledContainer>
      <StyledContainer>{state.showHistory && <HistoryPanel />}</StyledContainer>
    </StyledBackground>
  );
};

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
`;

export default MainScreen;
