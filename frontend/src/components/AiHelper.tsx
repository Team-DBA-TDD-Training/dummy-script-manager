import React, { useCallback, useState } from "react";
import { FaBrain } from "react-icons/fa";
import styled from "styled-components";
import TextInputComponent from "./TextInputComponent";
import { useAiHelper } from "../hooks/scripts";

const Component: React.FC<{ callback: (value: string) => void }> = ({ callback }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const toggleAiHelper = useCallback(() => {
    setVisible(!visible);
  }, [setVisible, visible]);

  const { ask, loading } = useAiHelper();

  const onAsk = useCallback(() => {
    if (message.length === 0) return;
    ask({ message }).then(data => {
      console.log({ data })
      callback(data.code);
    })
  }, [ask, message]);

  return (
    <div>

      <Container onClick={toggleAiHelper}>
        <FaBrain />
        <a>Ask AI Helper</a>
      </Container>
      {visible && <AiContainer>
        <TextInputComponent placeholder="Ask from AI. e.i I want to get total age of customers"
          onChange={setMessage}
          value={message}
          width="541px"
          height="200px"
        />
        <button onClick={onAsk} disabled={loading}>{loading ? 'Please wait' : 'Ask'}</button>
      </AiContainer>}
    </div>
  )
}

const Container = styled.div`
  align-items:center;
  gap: 5px;
  display: flex;
`
const AiContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default Component;