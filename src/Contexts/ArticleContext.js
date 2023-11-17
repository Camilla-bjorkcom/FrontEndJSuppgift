import { createContext, useContext, useEffect, useState } from "react";

const ArticleContext = createContext()
export const useArticles = () => useContext(ArticleContext); //Custom-hook

export const ArticleProvider = ({ children }) => {
    const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState(null)
    const [news, setNews ] = useState([])
    const [newsThree, setNewsThree ] = useState([])


    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {
        try {
            const result = await fetch(apiUrl)
            setArticles(await result.json())
        }
        catch (error) {
            console.error(error);
        }
    }

    const getArticle = async (id) => {
        try {
            if (id !== undefined) {
                const result = await fetch(`${apiUrl}/${id}`)

                if (result.status === 200) {
                    const data = await result.json()
                    setArticle(data)
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    const getNews = async (isFour) => {
        try {

            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles`);

            if (result.status === 200) {
                const data = await result.json();
                if (isFour)
                    setNews(data.slice(0, 4));
                else 
                    setNewsThree(data.slice(0,3));
            }

        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <ArticleContext.Provider value={{ articles, article, getArticle, getArticles, news, newsThree, getNews }}>
            {children}
        </ArticleContext.Provider>
    )
}