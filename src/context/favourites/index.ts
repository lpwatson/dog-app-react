import { createContext, Dispatch, SetStateAction, useContext } from "react";

type FavouritesContextType = {
  favourites: string[];
  setFavourites: Dispatch<SetStateAction<string[]>>;
}
export const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (context === undefined) {
    throw new Error("useFavourites must be used within a FavouritesContext");
  }
  return context;
}; 