import Article from "./Article.jsx";
import logo from '../assets/logo.svg'
import { useState } from "react";
import Category from "./Category.jsx";

function Archive() {
    const [archive, setArchive] = useState(JSON.parse(localStorage.getItem('archive')) || [])
    const categories = ['health', 'sports', 'travel']

    function handleDelete(url) {
        const newArchive = archive((article) => article.url !== url)
        setArchive(newArchive)
        localStorage.setItem('archive', JSON.stringify(newArchive))
    }

    return (
        <main className="archive">
            {archive.length === 0 && <p className="archive__empty">Du har ikke gemt nogen artikler endnu</p>}

            {categories.map((Category) => {
                const articles = archive.filter((article) => article.category === category)

                if (articles.length === 0) {
                    return null
                }

                return (
                    <section key={category} className="category">
                        <div className="category__header">
                            <img src={logo} alt="" />
                            <h2>{category}</h2>
                        </div>

                        {articles.map((article) => (
                            <Article
                                key={article.url}
                                title={article.title}
                                text={article.text}
                                image={article.image}
                                url={article.url}
                                onDelete={handleDelete}
                            />
                        ))}
                    </section>
                )
            })}
        </main>
    )
}

export default Archive