import create from "zustand"

const useStore = create(set => ({
    country: { value: -1, label: "undefined" },
    setCountry: (country) => set(state => ({ country })),

    category: { value: -1, label: "undefined" },
    setCategory: (category) => set(state => ({ category })),

    isSeller: undefined,
    setIsSeller: (isSeller) => set(state => ({ isSeller })),

    sellerDiffiePubKey: undefined,
    setSellerDiffiePubKey: (sellerDiffiePubKey) => set(state => ({ sellerDiffiePubKey })),

    publicKey: "",
    setPublicKey: (publicKey) => set(state => ({ publicKey })),

    privateKey: "",
    setPrivateKey: (privateKey) => set(state => ({ privateKey })),
}))

export default useStore