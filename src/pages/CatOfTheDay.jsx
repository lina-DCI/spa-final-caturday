import {useContext} from 'react'
import { CatContext } from "../context/CatContext";

const CatOfTheDay = () => {
    const { cat, setAllowCat, isLoading } = useContext(CatContext);
    
    if (isLoading) return <div className="cat-card">Loading...</div>;
    else {
        return (
            <>
                <h1>Cat of the Day</h1>
                <div className="cat-card"><img src={cat} alt='cat'/></div>
                <button onClick={() => setAllowCat(true)}>New Cat</button>
            </>
        );
    }
}
export default CatOfTheDay;