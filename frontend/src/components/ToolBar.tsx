import styled from "styled-components";
import ToolBarButton from "./ToolBarButton";
import { useAppContext } from "../AppContextProvider";
import {
  CREATE_SCRIPTS_API_URL,
  UPDATE_SCRIPTS_API_URL,
} from "../REQUEST_URLs.ts";
import { Script } from "../Script.ts";

const ToolBar = () => {
  const { state, dispatch } = useAppContext();

  const toggleHistoryPanel = () => {
    dispatch({ type: "TOGGLE" });
  };

  const CreateOrUpdateScript = (method: string, URL: string) => {
    const data = {
      title: state.currentScript.title,
      code: state.currentScript.code,
      description: state.currentScript.description,
      lastUpdatedAt: Date.now().toString(),
    };
    const requestOptions = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(URL, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          const scripts = data as unknown as Script[];
          dispatch({ type: "UPDATE_SCRIPTS", payload: scripts });
        }
      });
  };
  const onSaveNewScript = () => {
    CreateOrUpdateScript("POST", CREATE_SCRIPTS_API_URL);
  };
  const onUpdateScript = () => {
    CreateOrUpdateScript(
      "PUT",
      CREATE_SCRIPTS_API_URL + state.currentScript._id,
    );
  };

  return (
    <StyledDiv>
      <ToolBarButton caption="New Script" onClick={() => {}}></ToolBarButton>
      <ToolBarButton caption="Save Script" onClick={() => {}}></ToolBarButton>
      <ToolBarButton
        caption={state.showHistory ? "Hide History" : "Show History"}
        onClick={toggleHistoryPanel}
      ></ToolBarButton>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`;

export default ToolBar;
