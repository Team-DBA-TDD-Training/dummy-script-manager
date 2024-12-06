import { Script } from "../Script.ts";
import styled from "styled-components";
import { FaEdit, FaStar } from "react-icons/fa";
import {AiOutlineStar, AiTwotoneDelete } from "react-icons/ai";
import Switch from '@mui/material/Switch';
import { CloseOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import {
  CREATE_SCRIPTS_API_URL,
  DELETE_SCRIPTS_API_URL,
  FETCH_ALL_SCRIPTS_API_URL,
  UPDATE_SCRIPTS_API_URL
} from "../REQUEST_URLs.ts";
import { useAppContext } from "../AppContextProvider.tsx";

const HistoryPanel = () => {

  const [ scripts, setScripts ] = useState<Script[]>([]);
  const [ selectedScripts, setSelectedScripts ] = useState<string[]>([]);
  const [ favoritesOnly, setFavoritesOnly ] = useState<boolean>(false);
  const [ selectionLength, setSelectionLength ] = useState<number>(0);
  const { dispatch } = useAppContext();

  const toggleHistoryPanel = () => {
    dispatch({ type: "TOGGLE" });
  }
  const refreshScriptHistory = ()=>{
    fetch(FETCH_ALL_SCRIPTS_API_URL)
      .then(response => response.json())
      .then( data => {
        const scripts = data as unknown as Script[];
        setScripts(scripts);
      })
  }

  useEffect(() => {
    refreshScriptHistory()
  }, []);


  const createScript = () => {
    const data = {
      title : "new script",
      code: "new code",
      description: "some description"
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };

    fetch(CREATE_SCRIPTS_API_URL, requestOptions)
      .then(response => {
        if(response.ok) {
          refreshScriptHistory();
        }
      });
  }

  const OnEditClicked = () => {
    if(selectedScripts.length === 1) {
      updateScript(selectedScripts[0]);
    }
  }
  const updateScript = (_id: string) => {
    const data = {
      title : "updated name ",
      code: "updated code",
      description: "updated description",
      lastUpdatedAt: Date.now().toString()
    }
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };

    fetch(UPDATE_SCRIPTS_API_URL+ _id, requestOptions)
      .then(response => {
        if(response.ok) {
          refreshScriptHistory();
        }
      });
  }

  const onDeleteClicked = () => {
    if (selectedScripts.length > 0){
      deleteScripts(selectedScripts.toString());
    }
  }
  const deleteScripts = (ids: string) => {
    const requestOptions = {
      method: 'DELETE'
    };
    if (selectedScripts.length > 0){
      const deleteReq = DELETE_SCRIPTS_API_URL + ids;
        fetch(deleteReq, requestOptions)
          .then(response => {
            if(response.ok) {
              refreshScriptHistory();
              setSelectedScripts([]);
            }})
    }
  }
  const onScriptItemSelected = (_id: string) => {
      if(selectedScripts.includes(_id)) {
        setSelectionLength(selectedScripts.length-1);
        setSelectedScripts(selectedScripts.filter(x => x!==_id));

      }
      else{
        setSelectionLength(selectedScripts.length+1);
        selectedScripts.push(_id);
        setSelectedScripts(selectedScripts);
      }
  }

  return (
    <Panel>
      <Header>
        <div>History</div>
        <CloseOutlined onClick={toggleHistoryPanel} style={{cursor: "pointer"}}/>
      </Header>
      <Row>
       <Toolbar>
           <FaEdit onClick={OnEditClicked} style={selectionLength === 1 ? {color:  "black", cursor: "pointer"} : {color: "grey"}}/>
           <AiTwotoneDelete onClick={onDeleteClicked} style={selectionLength ? {color:  "black", cursor: "pointer"} : {color: "grey"}}/>
       </Toolbar>
        <StyledSwitch onChange={() => {
          setFavoritesOnly(val => !val)
        }}>
          Favorites only
          <Switch />
        </StyledSwitch>
      </Row>
    {(favoritesOnly ? scripts.filter(x=>x.isFavorite) : scripts).map(script =>  {
      return <ListItem key={script._id}>
          <Checkbox type={"checkbox"} onClick={() => {
            onScriptItemSelected(script._id);
          }}/>
          <Card>
            <Row>
              <ScriptTitle>{script.title}</ScriptTitle>
              <div>
                {script.isFavorite ? <FaStar/> : <AiOutlineStar />}
              </div>
            </Row>
            <ScriptBody>{script.code}</ScriptBody>
            <ScriptDate>Last updated at: {script.lastUpdatedAt}</ScriptDate>
          </Card>
        </ListItem>
    })}
  </Panel>
  );
}

export default HistoryPanel;


const Panel = styled.div`
  width: 295px;
  height: 612px;
  background-color: #EFF1EC;
  padding: 20px 16px 10px 20px;
  overflow: scroll;
  color: black;
`
const Header = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 400;
  justify-content: space-between;
`

const Card = styled.div`
  background-color: white;
  padding: 8px;
  text-align: left;
  width: 100%;
`

const ListItem = styled.div`
 display: flex;
  margin: 8px;
  gap: 8px;
  align-self: center;
`
const Checkbox = styled.input`
  align-self: start;
  margin-top: 8px;
  transform: scale(1.2);
 `

const ScriptTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
 `

const ScriptBody = styled.div`
  font-weight: 200;
  font-size: 10px;
  overflow: hidden;
  height: 46px;
`
const ScriptDate = styled.div`
  font-weight: 200;
  font-size: 8px;
  text-align: right;
  padding-top: 12px;
 `
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`
const Toolbar = styled.div`
  margin-left: 12px;
  margin-top: 12px;
  display: flex;
  gap: 8px;
`

const StyledSwitch = styled.div`
  font-size: 12px;
`
