import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Article from './Article.jsx'
import logo from '../assets/logo.svg'

function Category({name}) {
    const [isOpen, setIsOpen] = useState(false)
    const articles = [
        {title: 'Headline', text: 'Surfing is a surface water sport in which the wave rider, referred to as a surfer...', image: 'https://placehold.co/72' },
        {title: 'Headline', text: 'Surfing is a surface water sport in which the wave rider, referred to as a surfer...', image: 'https://placehold.co/72' }
    ]

    return (
        <section className="category">
            <button className="category__header" onClick={() => setIsOpen(!isOpen)}>
                <img src={logo} alt="" />
                <h2>{name}</h2>
                {isOpen ? <FiChevronDown/> : <FiChevronRight/>}
            </button>

            {isOpen && (
                <div className="category__articles">
                    {articles.map((article, index) => (
                        <Article key={index} title={article.title} text={article.text} image={article.image} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Category