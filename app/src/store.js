import create from "zustand"

const useStore = create(set => ({
    country: { value: -1, label: "undefined" },
    setCountry: (country) => set(state => ({ country })),

    category: { value: -1, label: "undefined" },
    setCategory: (category) => set(state => ({ category })),

    isSeller: undefined,
    setIsSeller: (isSeller) => set(state => ({ isSeller }))
}))

export default useStore