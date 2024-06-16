import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});

export const evenSelector = selector({
    key: 'evenSelector',
    get: ({get})=>{
        const count = get(countAtom);
        // The value of get is derived from other Atoms / other selectors

        // Similar to useMemo
        // useMemo(()=>{
        //     return count %2 == 0;
        // }, [count])

        return count %2 == 0;
    }
})
