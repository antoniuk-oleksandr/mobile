import {create} from "zustand/react";
import {ObserverStore} from "../types/ObserverStore";

export const useObserver = create<ObserverStore>((setState) => ({
    value: 0,
    notify: () => setState((state) => ({value: ++state.value}))
}));