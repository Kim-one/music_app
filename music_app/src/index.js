import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./app/home";
import Login from "./app/login";
import Navbar from "./app/nav_bar";
import Playlist from "./app/playlist";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route index element={<Home/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="playlists" element={<Playlist></Playlist>} />
                </Route>
                {/*<Route path="/">*/}
                {/*    <Route index element={<Home/>}/>*/}
                {/*    <Route path="login" element={<Login/>}/>*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    );
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);