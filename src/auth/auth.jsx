import { createContext, useContext, useMemo, useState } from "react";
import { tokenStore } from "./tokenStore";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(tokenStore.get());
  const value = useMemo(() => ({
    token,
    login: (phone, otp) => {
      if (!/^\d{10}$/.test(phone) || otp !== "123456") return false;
      const mockToken = `mock-admin-${phone}`;
      tokenStore.set(mockToken);
      setToken(mockToken);
      return true;
    },
    logout: () => { tokenStore.clear(); setToken(null); },
  }), [token]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
