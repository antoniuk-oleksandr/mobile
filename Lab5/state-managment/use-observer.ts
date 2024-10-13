import {create} from "zustand/react";
import {ObserverStore} from "../types/ObserverStore";

export const useObserver = create<ObserverStore>((setState) => ({
    newRecipe: null,
    additionalOffset: 0,
    setNewRecipe: (newRecipe) => setState((state) => ({
        newRecipe,
        additionalOffset: ++state.additionalOffset
    })),
}));