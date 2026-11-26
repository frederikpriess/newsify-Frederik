import Article from "./Article.jsx";

function Archive() {
    const archive = JSON.parse(localStorage.getItem('archive')) || []

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
                />
            ))}
        </main>
    )
}

export default Archive