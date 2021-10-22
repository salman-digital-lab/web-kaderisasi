import create from 'zustand'

const setUser = (set, value) => set(() => ({ user: value }))

const setIsNavbarScrolling = (set, value) =>
    set(() => ({ isNavbarScrolling: value }))

const zustandState = create((set) => ({
    user: null,
    isNavbarScrolling: false,

    setUser: (value) => setUser(set, value),
    setIsNavbarScrolling: (value) => setIsNavbarScrolling(set, value),
}))

export default zustandState
