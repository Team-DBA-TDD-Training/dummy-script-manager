import { Script } from "./Script.ts";
import styled from "styled-components";
import { FaCross, FaEdit, FaStar } from "react-icons/fa";
import {AiOutlineStar, AiTwotoneDelete } from "react-icons/ai";
import Switch from '@mui/material/Switch';
import { CloseFullscreen, CloseOutlined } from "@mui/icons-material";

const HistoryPanel = () => {

  const scripts : Script[] = [{id: 1, title: "Script 1", description:"", code: "db.getCollection(\"film_list\")\n" +
      "        .find({\n" +
      "            \"length\": {\n" +
      "                $gte: NumberInt(94)\n" +
      "            },\n" +
      "            \"category\": \"Horror\"\n" +
      "        })", isFavorite: true, createdAt:"", lastUpdatedAt:"22-12-2014"},
    {id: 2, title: "Script 2", description:"", code: "db.getCollection(\"film_list\")\n" +
        "        .aggregate({\n" +
        "            \"length\": {\n" +
        "                $gte: NumberInt(94)\n" +
        "            },\n" +
        "            \"category\": \"Horror\"\n" +
        "        })", isFavorite: false, createdAt:"", lastUpdatedAt:"22-12-2014"},
    {id: 3, title: "Script 3", description:"", code: "db.getCollection(\"film_list\")\n" +
        "        .aggregate({\n" +
        "            \"length\": {\n" +
        "                $gte: NumberInt(94)\n" +
        "            },\n" +
        "            \"category\": \"Horror\"\n" +
        "        })", isFavorite: false, createdAt:"", lastUpdatedAt:"22-12-2014"},
    {id: 4, title: "Script 1", description:"", code: "db.getCollection(\"film_list\")\n" +
        "        .find({\n" +
        "            \"length\": {\n" +
        "                $gte: NumberInt(94)\n" +
        "            },\n" +
        "            \"category\": \"Horror\"\n" +
        "        })", isFavorite: true, createdAt:"", lastUpdatedAt:"22-12-2014"},
    {id: 5, title: "Script 2", description:"", code: "db.getCollection(\"film_list\")\n" +
        "        .aggregate({\n" +
        "            \"length\": {\n" +
        "                $gte: NumberInt(94)\n" +
        "            },\n" +
        "            \"category\": \"Horror\"\n" +
        "        })", isFavorite: false, createdAt:"", lastUpdatedAt:"22-12-2014"},
    {id: 6, title: "Script 3", description:"", code: "db.getCollection(\"film_list\")\n" +
        "        .aggregate({\n" +
        "            \"length\": {\n" +
        "                $gte: NumberInt(94)\n" +
        "            },\n" +
        "            \"category\": \"Horror\"\n" +
        "        })", isFavorite: false, createdAt:"", lastUpdatedAt:"22-12-2014"},
    {id: 7, title: "Script 1", description:"", code: "db.getCollection(\"film_list\")\n" +
        "        .find({\n" +
        "            \"length\": {\n" +
        "                $gte: NumberInt(94)\n" +
        "            },\n" +
        "            \"category\": \"Horror\"\n" +
        "        })", isFavorite: true, createdAt:"", lastUpdatedAt:"22-12-2014"},
    {id: 8, title: "Script 2", description:"", code: "db.getCollection(\"film_list\")\n" +
        "        .aggregate({\n" +
        "            \"length\": {\n" +
        "                $gte: NumberInt(94)\n" +
        "            },\n" +
        "            \"category\": \"Horror\"\n" +
        "        })", isFavorite: false, createdAt:"", lastUpdatedAt:"22-12-2014"},
    {id: 9, title: "Script 3", description:"", code: "db.getCollection(\"film_list\")\n" +
        "        .aggregate({\n" +
        "            \"length\": {\n" +
        "                $gte: NumberInt(94)\n" +
        "            },\n" +
        "            \"category\": \"Horror\"\n" +
        "        })", isFavorite: false, createdAt:"", lastUpdatedAt:"22-12-2014"}]

  return (
    <Panel>
      <Header>
        <div>History</div>
        <CloseOutlined/>
      </Header>
      <Row>
       <Toolbar>
         <FaEdit/> <AiTwotoneDelete/>
       </Toolbar>
        <StyledSwitch>Favorites only<Switch /></StyledSwitch>
      </Row>
    {scripts.map(script =>  {
      return <ListItem key={script.id}>
          <Checkbox type={"checkbox"}/>
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