import React from 'react';
import './App.css';
import Cookies from 'universal-cookie';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';

import {ChannelListContainer,ChannelContainer} from './components'

const apiKey = '6hpumqmubw58'

const client = StreamChat.getInstance(apiKey); //instance of stream chat

function App() {
  return (
    <div className="app__wrapper">
       <Chat client={client} theme='team light'>
         <ChannelListContainer/>
         <ChannelContainer/>
       </Chat> 
    </div>
  );
}

export default App;
