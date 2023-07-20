import { createContext, useContext, useState, ReactNode } from 'react';

interface StateContextProps {
    type: string;
    setType: (type: string) => void;
}

const defaultState: StateContextProps = {
    type: 'mirana',
    setType: () => {},
};

export const StateContext = createContext<StateContextProps>(defaultState);

interface StateProviderProps {
    children: ReactNode;
}

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
    const [type, setType] = useState('mirana');

    return (
        <StateContext.Provider value={{ type, setType }}>
            {children}
        </StateContext.Provider>
    );
};

export function useStateContext() {
    return useContext(StateContext);
}
