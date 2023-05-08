import { useContext } from "react";
import { CatContext } from "../context/CatContext";

export default function Homepage() {
    const { catFact, setAllowFetch, isLoading } = useContext(CatContext);
    if (isLoading) return <div className="card">Loading...</div>;
    else {
        return (
            <>
                <h1>Cat Fact of the Day</h1>
                <div className="card">{catFact}</div>
                <button onClick={() => setAllowFetch(true)}>New Fact</button>
            </>
        );
    }
}
