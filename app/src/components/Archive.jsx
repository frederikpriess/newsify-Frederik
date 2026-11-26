import Article from "./Article.jsx";
import { useState } from "react";

function Archive() {
    const [archive, setArchive] = useState(JSON.parse(localStorage.getItem('archive')) || [])
    
    function handleDelete(url) {
        const newArchive = archive((article) => article.url !== url)
        setArchive(newArchive)
        localStorage.setItem('archive', JSON.stringify(newArchive))
    }

    return (
        <main className="archive">
            {archive.length === 0 && <p className="archive__empty">Du har ikke gemt nogen artikler endnu</p>}

            {archive.map((article) => (
                <Article 
                    key={article.url}
                    title={article.title}
                    text={article.text}
                    image={article.image}
                    url={article.url}
                    onDelete={handleDelete}
                />
            ))}
        </main>
    )
}

export default Archive