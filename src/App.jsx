import "./App.css";
import { CatAppProvider } from "./context/CatContext";
import Navbar from "./components/Navbar";
import CatOfTheDay from "./pages/CatOfTheDay";
import Homepage from "./pages/Homepage";
// import WhichCatAreYou from "./pages/WhichCatAreYou";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";

function App() {
    return (
        <BrowserRouter>
            <CatAppProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Homepage />} />
                        <Route
                            path="/cat-of-the-day"
                            element={<CatOfTheDay />}
                        />
                        {/* <Route
                            path="/which-cat-breed-are-you"
                            element={<WhichCatAreYou />}
                        /> */}
                    </Route>
                </Routes>
            </CatAppProvider>
        </BrowserRouter>
    );
}

export default App;
