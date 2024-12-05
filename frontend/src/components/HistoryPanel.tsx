import { Script } from "../Script.ts";
import styled from "styled-components";
import { FaEdit, FaStar } from "react-icons/fa";
import {AiOutlineStar, AiTwotoneDelete } from "react-icons/ai";
import Switch from '@mui/material/Switch';
import { CloseOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import {DELETE_SCRIPTS_API_URL, FETCH_ALL_SCRIPTS_API_URL } from "../REQUEST_URLs.ts";

const HistoryPanel = () => {

  const [ scripts, setScripts ] = useState<Script[]>([]);
  const [ selectedScripts, setSelectedScripts ] = useState<string[]>([]);
  const [ favoritesOnly, setFavoritesOnly ] = useState<boolean>(false);

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

  const onDelete = () => {
    const requestOptions = {
      method: 'DELETE'
    };
    if (selectedScripts.length > 0){
      const deleteReq = DELETE_SCRIPTS_API_URL + selectedScripts.toString();
        fetch(deleteReq, requestOptions)
          .then(response => {
            if(response.status === 200) {
              refreshScriptHistory();
              setSelectedScripts([]);
            }
          })
    }
  }

  const onScriptItemSelected = (_id: string) => {
      if(selectedScripts.includes(_id)) {
        setSelectedScripts(selectedScripts.filter(x => x!==_id));
      }
      else{
        selectedScripts.push(_id);
        setSelectedScripts(selectedScripts);
      }
  }

  return (
    <Panel>
      <Header>
        <div>History</div>
        <CloseOutlined/>
      </Header>
      <Row>
       <Toolbar>
         <FaEdit /> <AiTwotoneDelete onClick={onDelete} />
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
              <FavoriteDiv>
                {script.isFavorite ? <FaStar/> : <AiOutlineStar />}
              </FavoriteDiv>
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
const FavoriteDiv = styled.div`
`