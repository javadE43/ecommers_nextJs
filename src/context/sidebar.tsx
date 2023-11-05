"use client";
import React, { createContext, useMemo, useState, useEffect,useContext } from "react";

//INTERFACE
interface State {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSidebarExpanded: React.Dispatch<React.SetStateAction<string | boolean>>
}
const state: State = {
  open: false,
  setOpen: (value) => value,
  setSidebarExpanded: (value) => value,
};

//CREATRE CONTEXT
const contextSidebar = createContext<State>(state);

export const ProviderSideBare = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean | string>(false);
  //USEMEMO
  const contextValue = useMemo(() => {
    return { open, setOpen,setSidebarExpanded };
  }, [open, setOpen,sidebarExpanded,setSidebarExpanded]);

  //LOCALSTROGE SAVE EXPANDED SIDEBAR


  useEffect(()=>{
    console.log("open")
    const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
    setSidebarExpanded(storedSidebarExpanded === null ? false : storedSidebarExpanded === "true")
  },[open])

  useEffect(() => {
    console.log("open2")
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);
  return <contextSidebar.Provider value={contextValue}>{children}</contextSidebar.Provider>;
};

//USECONTEXT
export function useAppContext() {
  return useContext(contextSidebar);
}
