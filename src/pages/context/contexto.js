import { createContext, useContext, useState } from 'react'

const Context = createContext()

export function MiProvider(  {children}  ){
    const [estado, setEstado] = useState('user')

    return (
        <Context.Provider value={[estado, setEstado]}>
            {children}
        </Context.Provider>
    )
}

export function useMiProvider(){
    return useContext(Context)
}