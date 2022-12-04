import React from "react";
import { auth } from "../firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  Auth,
  User,
  UserCredential,
} from "firebase/auth";

interface AuthContextProps {
  children?: React.ReactNode;
}

export interface AuthContextModel {
  auth: Auth;
  user: User | null;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
}

const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel
);

export const useAuth = () => React.useContext(AuthContext);

export default function AuthContextProvider({ children }: AuthContextProps) {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  React.useEffect(() => {
    console.log("The user is", user);
  }, [user]);
}