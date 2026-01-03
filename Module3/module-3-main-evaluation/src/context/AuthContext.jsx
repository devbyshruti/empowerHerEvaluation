import { Children, createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = (email, password) => {
        if (email === "admin@gmail.com" && password === "admin1234") {
            const userData = { role: "admin" };
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));
            return "/admin/dashboard";
        }

        if (email === "customer@gmail.com"&& password === "customer1234") {
             const userData = { role: "customer" };
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));
            return "/customers/dashboard";
        }
        alert("Invalid credentials");
        return  null;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {Children}
        </AuthContext.Provider>
    );
};