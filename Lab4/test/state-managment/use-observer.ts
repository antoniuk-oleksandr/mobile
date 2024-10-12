import {create} from "zustand/react";
import {UpdateStore} from "../types/UpdateStore";

export const useUpdate = create<UpdateStore>((setState) => ({
    value: 0,
    notify: () => setState((state) => ({value: ++state.value}))
}));