import { useState, useEffect, createContext } from "react";

export const CatContext = createContext();

export const CatAppProvider = ({ children }) => {
    const [catFact, setCatFact] = useState([]);

    const [allowFetch, setAllowFetch] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const getCatFact = () => {
        const url = "https://catfact.ninja/fact";
        setIsLoading(true);
        (async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data.fact);
                setCatFact(data.fact);
            } catch (error) {
                console.error(error);
            }
        })();
    };

    useEffect(() => {
        allowFetch && getCatFact();
        setIsLoading(false);
        setAllowFetch(false);
    }, [allowFetch]);

    // get cat of the day
    const [cat, setCat] = useState([]);
    const [allowCat, setAllowCat] = useState(true);
    const getCat = () => {
        const url = "https://api.thecatapi.com/v1/images/search";
        setIsLoading(true);
        (async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data[0].url);
                setCat(data[0].url);
            } catch (error) {
                console.error(error);
            }
        })();
    };
    useEffect(() => {
        allowCat && getCat();
        setIsLoading(false);
        setAllowCat(false);
    }, [allowCat]);

    return (
        <CatContext.Provider
            value={{
                isLoading,
                cat,
                catFact,
                allowCat,
                setAllowCat,
                allowFetch,
                setAllowFetch,
            }}
        >
            {children}
        </CatContext.Provider>
    );
};
