import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FallbackLoading from "./loader/fallback-loading";

const LandingPage = lazy(() => import("./pages/landing"));

function App() {
    return (
        <div className="App">
                <Suspense fallback={<FallbackLoading/>}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                    </Routes>
                </Suspense>
        </div>
    );
}

export default App;
