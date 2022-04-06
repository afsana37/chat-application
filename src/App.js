import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';


const App = () => {
    return (
       <ChatEngine
            height="100vh"
            projectID="0d391b3d-f16b-477e-9120-441b3b8e34ca"
            userName="loficoder"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
       />
    );
}

export default App;