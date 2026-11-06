import { createContext } from "react";
// The context and its provider are kept together in this file.
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext(null);

export function UserProvider({ children }) {
    const user = {
        name: "Youssef",
        age: 25,
        email: "Youssef@gmail.com",
        role: "Developer",
    };
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}