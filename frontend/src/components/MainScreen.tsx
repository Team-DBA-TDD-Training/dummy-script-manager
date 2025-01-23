import styled from "styled-components";
import TextInputComponent from "./TextInputComponent";
import TextAreaComponent from "./TextAreaComponent";
import ToolBar from "./ToolBar";
import AiHelper from './AiHelper';
import HistoryPanel from "./HistoryPanel";
import { useAppContext } from "../AppContextProvider";

const MainScreen = () => {
  const { state, dispatch } = useAppContext();
  const handleScriptTitle = (value: string) => {
    dispatch({
      type: "SET_CURRENT_SCRIPT",
      payload: { ...state.currentScript, title: value },
    });
    dispatch({
      type: "SET_HAS_UNSAVED_CHANGES",
      payload: true,
    });
  };
  const handleScriptDescription = (value: string) => {
    dispatch({
      type: "SET_CURRENT_SCRIPT",
      payload: { ...state.currentScript, description: value },
    });
    dispatch({
      type: "SET_HAS_UNSAVED_CHANGES",
      payload: true,
    });
  };
  const handleScriptCode = (value: string) => {
    dispatch({
      type: "SET_CURRENT_SCRIPT",
      payload: { ...state.currentScript, code: value },
    });
    dispatch({
      type: "SET_HAS_UNSAVED_CHANGES",
      payload: true,
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
          isBold={true}
          placeholder="Script name"
        ></TextInputComponent>
        <TextInputComponent
          onChange={handleScriptDescription}
          value={state.currentScript.description}
          width={"541px"}
          height={"40px"}
          placeholder="Script description"
        ></TextInputComponent>
        <TextAreaComponent
          onChange={handleScriptCode}
          value={state.currentScript.code}
          width={"541px"}
          height={"300px"}
          className="scriptInput"
          placeholder={"Write your script here.."}
        ></TextAreaComponent>
        <AiHelper callback={handleScriptCode}/>
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
