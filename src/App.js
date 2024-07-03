import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" exact={true} element={<LandingPage />} />
            </Routes>
        </div>
    );
}

export default App;
