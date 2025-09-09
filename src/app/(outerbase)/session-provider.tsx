"use client";
import {
  createContext,
  PropsWithChildren,
  useContext,
} from "react";

interface OuterebaseSessionContextProps {
  isLoading: boolean;
  token?: string;
  session?: undefined;
  logout: () => void;
  refreshSession: () => Promise<void>;
}

const OuterbaseSessionContext = createContext<OuterebaseSessionContextProps>({
  isLoading: false,
  logout: () => {},
  refreshSession: async () => {},
});

export function useSession() {
  return useContext(OuterbaseSessionContext);
}

export function OuterbaseSessionProvider({ children }: PropsWithChildren) {
  return (
    <OuterbaseSessionContext.Provider
      value={{ isLoading: false, logout: () => {}, refreshSession: async () => {} }}
    >
      {children}
    </OuterbaseSessionContext.Provider>
  );
}
