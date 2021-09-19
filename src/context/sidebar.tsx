import { createContext, useState, ReactNode } from 'react';

type SidebarProviderProps = {
  children: ReactNode;
};

type SidebarContextData = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContext = createContext({} as SidebarContextData);

export function SidebarContextProvider({ children }: SidebarProviderProps) {
  const [active, setActive] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        active,
        setActive,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarContext;
