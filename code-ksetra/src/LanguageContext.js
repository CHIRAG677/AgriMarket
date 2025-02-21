import { createContext, useState } from "react";

export const LanguageContext = createContext(); // Create the context

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en"); // Default: English

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
