import GlobalStyle from "./styles/GlobalStyles";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import ProfileEdit from "./pages/Main/components/ProfileEdit";
import ImagePost from "./pages/Upload/ImagePost";
import Feed from "./pages/Feed/Feed";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profileEdit" element={<ProfileEdit />} />
                <Route path="/imagePost" element={<ImagePost />} />
                <Route path="/insta/:memberId/:postId" element={<Feed />} />
            </Routes>
        </div>
    );
}

export default App;
