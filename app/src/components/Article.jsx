function Article ({title, text, image}) {
    return (
        <article className="article">
            <img src={image} alt="" />
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </article>
    )
}

export default Article