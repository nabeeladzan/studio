"use client";
import { createContext, PropsWithChildren, useContext } from "react";

interface WorkspaceContextProps {
  workspaces: any[];
  currentWorkspace?: any;
  refreshWorkspace: () => Promise<void>;
  refreshPartial: (workspace: any) => void;
  loading: boolean;
}

const WorkspaceContext = createContext<WorkspaceContextProps>({
  workspaces: [],
  loading: false,
  refreshWorkspace: async () => {},
  refreshPartial: () => {},
});

export function useWorkspaces() {
  return useContext(WorkspaceContext);
}

export function WorkspaceProvider({ children }: PropsWithChildren) {
  return (
    <WorkspaceContext.Provider
      value={{
        workspaces: [],
        loading: false,
        refreshWorkspace: async () => {},
        refreshPartial: () => {},
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
}
