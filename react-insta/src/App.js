import GlobalStyle from "./styles/GlobalStyles";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default App;
