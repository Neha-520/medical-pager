import React from 'react';
import './App.css';
import Cookies from 'universal-cookie';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';

import { ChannelListContainer, ChannelContainer, Auth } from './components'

const apiKey = '6hpumqmubw58'

const client = StreamChat.getInstance(apiKey); //instance of stream chat

const authToken = false;

function App() {
  if (!authToken) return <Auth />
  return (
    <div className="app__wrapper">
      <Chat client={client} theme='team light'>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
