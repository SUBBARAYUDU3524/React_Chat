import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase"; // Assuming `db` is Firestore
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    // Get the current authenticated user
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log("Current User:", user);
    });

    // Function to fetch all users from Firestore
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllUsers(usersList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    if (allUsers.length > 0) {
      console.log("All Users:", allUsers);
    }
  }, [allUsers]); // This useEffect will run whenever allUsers is updated

  return (
    <AuthContext.Provider value={{ currentUser, allUsers }}>
      {children}
    </AuthContext.Provider>
  );
};
