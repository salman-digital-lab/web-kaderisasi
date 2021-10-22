import create from 'zustand'

const setUser = (set, value) => set(() => ({ user: value }))

const setIsAuthenticating = (set, value) =>
    set(() => ({ isAuthenticating: value }))

const setIsNavbarScrolling = (set, value) =>
    set(() => ({ isNavbarScrolling: value }))

const zustandState = create((set) => ({
    user: null,
    isAuthenticating: true,
    isNavbarScrolling: false,

    setUser: (value) => setUser(set, value),
    setIsAuthenticating: (value) => setIsAuthenticating(set, value),
    setIsNavbarScrolling: (value) => setIsNavbarScrolling(set, value),
}))

export default zustandState
