import { useState, useEffect } from "react";
import Article from './Article.jsx'

function Popular() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${import.meta.env.VITE_NYT_KEY}`

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.results) {
                    setArticles(data.results.slice(0, 10))
                }
            })
    }, [])

    return (
        <main className="popular">
            {articles.map((article) => (
                <Article
                    key={article.url}
                    title={article.title}
                    text={article.abstract}
                    image={article.media.length > 0 ? article.media[0]['media-metadata'][0].url : ''}
                    url={article.url}
                    category={article.section.toLowerCase()}
                />
            ))}
        </main>
    )
}

export default Popular