import { Script } from "../Script.ts";
import styled from "styled-components";
import { FaEdit, FaStar } from "react-icons/fa";
import { AiOutlineStar, AiTwotoneDelete } from "react-icons/ai";
import Switch from "@mui/material/Switch";
import { CloseOutlined } from "@mui/icons-material";
import { useCallback, useEffect, useState } from "react";
import {
  DELETE_SCRIPTS_API_URL,
  FETCH_ALL_SCRIPTS_API_URL,
  MARK_FAVORITE_API_URL,
  UNMARK_FAVORITE_API_URL
} from "../REQUEST_URLs.ts";
import { useAppContext } from "../AppContextProvider.tsx";

const HistoryPanel = () => {
  const [selectedScripts, setSelectedScripts] = useState<string[]>([]);
  const [favoritesOnly, setFavoritesOnly] = useState<boolean>(false);
  const [selectionLength, setSelectionLength] = useState<number>(0);
  const { state, dispatch } = useAppContext();

  const toggleHistoryPanel = () => {
    dispatch({ type: "TOGGLE" });
  };
  const refreshScriptHistory = useCallback(() => {
    fetch(FETCH_ALL_SCRIPTS_API_URL)
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
  }, [dispatch]);

  useEffect(() => {
    refreshScriptHistory();
  }, [refreshScriptHistory]);

  const OnEditClicked = () => {
    if (selectedScripts.length === 1) {
      dispatch({
        type: "SET_IS_NEW",
        payload: false
      });
      dispatch({
        type: "SET_CURRENT_SCRIPT",
        payload: state.scripts.find((x) => x._id === selectedScripts[0])
      });
    }
  };

  const onDeleteClicked = () => {
    if (selectedScripts.length > 0) {
      deleteScripts(selectedScripts.toString());
    }
  };
  const deleteScripts = (ids: string) => {
    const requestOptions = {
      method: "DELETE"
    };
    const deleteReq = DELETE_SCRIPTS_API_URL + ids;
    fetch(deleteReq, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          const scripts = data as unknown as Script[];
          dispatch({ type: "UPDATE_SCRIPTS", payload: scripts });
          setSelectedScripts([]);
        }
      });
  };
  const onScriptItemSelected = (_id: string) => {
    if (selectedScripts.includes(_id)) {
      setSelectionLength(selectedScripts.length - 1);
      setSelectedScripts(selectedScripts.filter((x) => x !== _id));
    } else {
      setSelectionLength(selectedScripts.length + 1);
      selectedScripts.push(_id);
      setSelectedScripts(selectedScripts);
    }
  };
  const markUnmarkFavorite = (URL: string) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
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

  return (
    <Panel>
      <Header>
        <div>History</div>
        <CloseOutlined
          onClick={toggleHistoryPanel}
          style={{ cursor: "pointer" }}
        />
      </Header>
      <Row>
        <Toolbar>
          <FaEdit
            onClick={OnEditClicked}
            style={
              selectionLength === 1
                ? { color: "black", cursor: "pointer" }
                : { color: "grey" }
            }
          />
          <AiTwotoneDelete
            onClick={onDeleteClicked}
            style={
              selectionLength
                ? { color: "black", cursor: "pointer" }
                : { color: "grey" }
            }
          />
        </Toolbar>
        <StyledSwitch
          onChange={() => {
            setFavoritesOnly((val) => !val);
          }}
        >
          Favorites only
          <Switch />
        </StyledSwitch>
      </Row>
      {(favoritesOnly
          ? state.scripts.filter((x) => x.isFavorite)
          : state.scripts
      ).map((script) => {
        return (
          <ListItem key={script._id}>
            <Checkbox
              type={"checkbox"}
              onClick={() => {
                onScriptItemSelected(script._id!);
              }}
            />
            <Card>
              <Row>
                <ScriptTitle>{script.title}</ScriptTitle>
                <div>
                  {script.isFavorite ? (
                    <FaStar
                      onClick={() => {
                        markUnmarkFavorite(
                          UNMARK_FAVORITE_API_URL + script._id
                        );
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <AiOutlineStar
                      onClick={() => {
                        markUnmarkFavorite(MARK_FAVORITE_API_URL + script._id);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </div>
              </Row>
              <ScriptBody>{script.code}</ScriptBody>
              <ScriptDate>Last updated at: {script.lastUpdatedAt}</ScriptDate>
            </Card>
          </ListItem>
        );
      })}
    </Panel>
  );
};

export default HistoryPanel;

const Panel = styled.div`
  width: 295px;
  height: 612px;
  background-color: #eff1ec;
  padding: 20px 16px 10px 20px;
  overflow: scroll;
  color: black;
`;
const Header = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 400;
  justify-content: space-between;
`;

const Card = styled.div`
  background-color: white;
  padding: 8px;
  text-align: left;
  width: 100%;
`;

const ListItem = styled.div`
  display: flex;
  margin: 8px;
  gap: 8px;
  align-self: center;
`;
const Checkbox = styled.input`
  align-self: start;
  margin-top: 8px;
  transform: scale(1.2);
`;

const ScriptTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
`;

const ScriptBody = styled.div`
  font-weight: 200;
  font-size: 10px;
  overflow: hidden;
  height: 46px;
`;
const ScriptDate = styled.div`
  font-weight: 200;
  font-size: 8px;
  text-align: right;
  padding-top: 12px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Toolbar = styled.div`
  margin-left: 12px;
  margin-top: 12px;
  display: flex;
  gap: 8px;
`;

const StyledSwitch = styled.div`
  font-size: 12px;
`;
