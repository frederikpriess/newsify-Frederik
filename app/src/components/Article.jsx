function Article ({title, text, image, url}) {
    return (
        <a href={url} className="article">
            <img src={image} alt="" />
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </a>
    )
}

export default Article