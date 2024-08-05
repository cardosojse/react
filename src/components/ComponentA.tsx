import { createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext("Default");

function ComponentA() {
    const user = "JC";

    return (
        <>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </>
    )
}

export default ComponentA;