import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext({});

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  const {user, signed} = context;
  return {user, signed};
}
