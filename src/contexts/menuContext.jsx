import { createContext } from "react"

export const menuContext = createContext({
  menus:[],
  setMenus : ()=>{}
});

export function MenuProvider({children,value}) {
  return (
    <menuContext.Provider value={value}>
      {children}
    </menuContext.Provider>
  )
}
