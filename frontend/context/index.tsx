import React, {createContext, useState} from 'react';
interface User {
  id: number;
  name: string;
}
interface GlobalStateContextType {
  showLoginView: boolean;
  setShowLoginView: React.Dispatch<React.SetStateAction<boolean>>;
  currentUserName: string | null;
  setCurrentUserName: React.Dispatch<React.SetStateAction<string | null>>;
  currentUser: string | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<string | null>>;
  allUsers: User[];
  setAllUsers: React.Dispatch<React.SetStateAction<User[]>>;
  currentUserPhoto: string | null;
  setCurrentUserPhoto: React.Dispatch<React.SetStateAction<string | null>>;
}

export const GlobalContext = createContext<GlobalStateContextType | null>(null);

function GlobalState({children}: {children: React.ReactNode}) {
  const [showLoginView, setShowLoginView] = useState(false);
  const [currentUserName, setCurrentUserName] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [currentUserPhoto, setCurrentUserPhoto] = useState<string | null>(null);

  const [allUsers, setAllUsers] = useState<User[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        showLoginView,
        setShowLoginView,
        currentUserName,
        setCurrentUserName,
        currentUser,
        setCurrentUser,
        allUsers,
        setAllUsers,
        currentUserPhoto,
        setCurrentUserPhoto,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
