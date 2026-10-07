import { createContext, useReducer } from 'react';

const initialState = {
  laskuri: 0
};

function laskuriReducer(state, action) {
  switch (action.type) {
    case 'KASVATA':
      return { ...state, laskuri: state.laskuri + 1 };
    case 'VAHENNA':
      return { ...state, laskuri: state.laskuri - 1 };
    case 'NOLLAA':
      return initialState;
    default:
      throw new Error('Tuntematon toiminto: ' + action.type);
  }
}

export const LaskuriContext = createContext();

export function LaskuriProvider({ children }) {
  const [state, dispatch] = useReducer(laskuriReducer, initialState);

  return (
    <LaskuriContext.Provider value={{ state, dispatch }}>
      {children}
    </LaskuriContext.Provider>
  );
}