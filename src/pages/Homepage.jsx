import { useContext } from "react";
import { CatContext } from "../context/CatContext";

export default function Homepage() {
    const { catFact, setAllowFetch, isLoading } = useContext(CatContext);
    if (isLoading) return <div className="card">Loading...</div>;
    else {
        return (
            <div className="main-container">
                <h1>Cat Fact of the Day</h1><div className="cat-illustration">
                <img src="../public/images/cat-159653.svg" alt="cat" /></div>
                <div className="card">{catFact}</div>
                <button onClick={() => setAllowFetch(true)}>New Fact</button>
            </div>
        );
    }
}
