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

    useEffect(() => { allowFetch&&
        (getCatFact(),
        setIsLoading(false),
        setAllowFetch(false))
    }, [allowFetch]);

    return (
        <CatContext.Provider value={{ catFact, allowFetch, setAllowFetch }}>
            {children}
        </CatContext.Provider>
    );
};
