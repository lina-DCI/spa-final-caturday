import { useState, useEffect, createContext } from "react";

export const CatContext = createContext();

export const CatAppProvider = ({ children }) => {
    const [catFact, setCatFact] = useState([]);
    const [allowFetch, setAllowFetch] = useState(true);

    const getCatFact = () => {
        const url = "https://catfact.ninja/fact";
       
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
        setAllowFetch(false))
    }, [allowFetch]);

    return (
        <CatContext.Provider value={{ catFact, allowFetch, setAllowFetch }}>
            {children}
        </CatContext.Provider>
    );
};
