import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Article from './Article.jsx'
import logo from '../assets/logo.svg'

function Category({ name }) {
    const [isOpen, setIsOpen] = useState(false)
    const [articles, setArticles] = useState([])

    function handleClick() {
        setIsOpen(!isOpen)

        if (articles.length === 0) {
            const url = `https://api.nytimes.com/svc/topstories/v2/${name}.json?api-key=${import.meta.env.VITE_NYT_KEY}`

            fetch(url)
                .then((response) => response.json())
                .then((data) => setArticles(data.results.slice(0, 5)))
        }
    }

    return (
        <section className="category">
            <button className="category__header" onClick={handleClick}>
                <img src={logo} alt="" />
                <h2>{name}</h2>
                {isOpen ? <FiChevronDown /> : <FiChevronRight />}
            </button>

            {isOpen && (
                <div className="category__articles">
                    {articles.map((article, index) => (
                        <Article key={index} title={article.title} text={article.abstract} image={article.multimedia ? article.multimedia[0].url : ''} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Category