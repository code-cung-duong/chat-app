import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import './App.css';
import ChatRoom from './components/ChatRoom/ChatRoom';
import Login from './components/Login/Login';
import AppProvider from './context/AppProvider';
import AuthProvider from './context/AuthProvider';
import AddRoom from './modals/AddRoom';
import EditRoom from './modals/EditRoom';
import InviteMember from './modals/InviteMember';
import ListMember from './modals/ListMember';
function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppProvider>
                    <Switch>
                        <Route path="/login"><Login/></Route>
                        <Route path="/"><ChatRoom/></Route>
                        
                    </Switch>
                    <AddRoom/>
                    <InviteMember/>
                    <ListMember/>
                    <EditRoom/>
                </AppProvider>

            </AuthProvider>

        </BrowserRouter>
    );
}

export default App;
