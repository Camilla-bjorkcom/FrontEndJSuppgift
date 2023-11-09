import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext()

export const useProducts = () => useContext(ProductContext)

export const ProductProvider = ({children}) => {
    const apiUrl = ""
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const result = await fetch(apiUrl)
        setProducts(await result.json())
    }

    const getProduct = async (id) => {
        const result = await fetch(`${apiUrl}/${id}`)
        setProduct(await result.json())
    }

    const createProduct = async (product) => {
        const result = await fetch (`${apiUrl}`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })

        if (result.status === 201) { 
        setProducts(await result.json())
        }
    }

    return (
        <ProductContext.Provider value={{products, product, getProduct, getProducts}}>
            {children}
        </ProductContext.Provider>
    )
}