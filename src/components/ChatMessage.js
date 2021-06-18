import React from "react";
import styled from "styled-components";

function ChatMessage({ text, name, image, timestamp }) {
  return (
    <Container>
      <UserAvatar>
        <img src={image} alt="useravatar" />
      </UserAvatar>

      <MessageContent>
        <Name>
          {name} <span>{new Date(timestamp.toDate()).toUTCString()}</span>
        </Name>
        <Text>{text}</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 8px;

  img {
    width: 100%;
  }
`;

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;

  span {
    margin-right: 8px;
    font-weight: 400;
    color: rgb(97, 97, 97);
    font-size: 12px;
  }
`;

const Text = styled.span``;
