import styled from "styled-components";
import ToolBarButton from "./ToolBarButton";
import { useAppContext } from "../AppContextProvider";
import {
  CREATE_SCRIPTS_API_URL,
  UPDATE_SCRIPTS_API_URL
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
      lastUpdatedAt: Date.now().toString()
    };
    const requestOptions = {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    return fetch(URL, requestOptions).then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
  };
  const createScript = () => {
    CreateOrUpdateScript("POST", CREATE_SCRIPTS_API_URL).then((data) => {
      if (data) {
        const scripts = data as unknown as Script[];
        dispatch({ type: "UPDATE_SCRIPTS", payload: scripts });
        dispatch({
          type: "SET_HAS_UNSAVED_CHANGES",
          payload: false
        });
        dispatch({
          type: "SET_CURRENT_SCRIPT",
          payload: {
            ...state.currentScript,
            _id: scripts[scripts.length - 1]._id
          }
        });
      }
    });
  };
  const updateScript = () => {
    return CreateOrUpdateScript(
      "PUT",
      UPDATE_SCRIPTS_API_URL + state.currentScript._id
    ).then((data) => {
      if (data) {
        const scripts = data as unknown as Script[];
        dispatch({ type: "UPDATE_SCRIPTS", payload: scripts });
        dispatch({
          type: "SET_HAS_UNSAVED_CHANGES",
          payload: false
        });
      }
    });
  };

  const onNewScriptClicked = () => {
    if (state.hasUnsavedChanged && state.currentScript._id) {
     updateScript().then(data => {
       dispatch({
         type: "SET_IS_NEW",
         payload: true
       });
       dispatch({
         type: "SET_CURRENT_SCRIPT",
         payload: { title: "", description: "", code: "" }
       });
     });
    }
    else {
      dispatch({
        type: "SET_IS_NEW",
        payload: true
      });
      dispatch({
        type: "SET_CURRENT_SCRIPT",
        payload: { title: "", description: "", code: "" }
      });
    }

  };

  const onSaveScriptClicked = () => {
    if (state.isNew) {
      createScript();
      dispatch({
        type: "SET_IS_NEW",
        payload: false
      });
    } else {
      updateScript();
    }
  };
  return (
    <StyledDiv>
      <ToolBarButton
        caption="New Script"
        onClick={onNewScriptClicked}
      ></ToolBarButton>
      <ToolBarButton
        caption="Save Script"
        onClick={onSaveScriptClicked}
      ></ToolBarButton>
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
