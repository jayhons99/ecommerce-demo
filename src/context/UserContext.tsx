import {  useEffect, useState } from "react";
import { User, useAuth0 } from "@auth0/auth0-react";
import { UserContext } from ".";

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [myUser, setMyUser] = useState<User | null>(null!);
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem("isLoggedIn", "true");
            setMyUser(user!);   
        } else {
            localStorage.setItem("isLoggedIn", "false");
            setMyUser(null);
        }
    }, [isAuthenticated])
    return (
        <UserContext.Provider value={{ loginWithRedirect, logout, myUser, isAuthenticated}}>{children}</UserContext.Provider>
    )
}