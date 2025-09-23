import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

//* Create user context for share data in Global.
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

   //* THis handler Fetch all users data .
  const handlerFetchUsers = async () => {
    setLoading(true);
    try {
      const response = await api.get("/users");
      setUsers(response.data);
      setError("");
    } catch (err) {
        console.log(err.message)
      setError("Failed to fetch users data.",);
    } finally {
      setLoading(false);
    }
  };

  //* This Handler Add new user data.
  const HandlerAddUser = async (newUser) => {
    try {
      const response = await api.post("/users", newUser);
      setUsers((prev) => [...prev, response.data]); 
    } catch (err) {
        console.log(err.message)
      setError("Failed to add new user.");
    }
  };

  //* This Handler  Update user data.
  const handlerUpdateUser = async (id, updatedUser) => {
    try {
      const response = await api.put(`/users/${id}`, updatedUser);
      setUsers((prev) =>
        prev.map((user) => (user.id === id ? response.data : user))
      );
    } catch (err) {
        console.log(err.message)
      setError("Failed to update user data.");
    }
  };

  //* This handler Delete user data.
  const handlerDeleteUser = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
        console.log(err.message)
      setError("Failed to delete user data");
    }
  };

  //* Load users when app starts.
  useEffect(() => {
    handlerFetchUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        handlerFetchUsers,
        HandlerAddUser,
        handlerUpdateUser,
        handlerDeleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUsers = () => useContext(UserContext);
