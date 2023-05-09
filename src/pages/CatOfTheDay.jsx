import { useContext } from "react";
import { CatContext } from "../context/CatContext";

const CatOfTheDay = () => {
    const { cat, setAllowCat, isLoading } = useContext(CatContext);

    if (isLoading) return <div className="cat-card"><img src="./src/assets/cat-159653.svg" width="200"  alt="Image is Loading"/></div>;
    else {
        return (
            <div className="main-container">
                <h1>Cat of the Day</h1>
                <div className="cat-card">
                    <img src={cat} alt="cat" />
                </div>
                <button onClick={() => setAllowCat(true)}>New Cat</button>
            </div>
        );
    }
};
export default CatOfTheDay;
