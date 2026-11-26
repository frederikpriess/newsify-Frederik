import { useState } from "react";
import { FiBookmark, FiTrash2 } from "react-icons/fi";

function Article({title, text, image, url, onDelete}) {
    const [isSwiped, setIsSwiped] = useState(false)
    const [startX, setStartX] = useState(0)

    function handleTouchStart(event) {
        setStartX(event.touches[0].clientX)
    }

    function handleTouchEnd(event) {
        const endX = event.changedTouches[0].clientX

        if (startX - endX > 50) {
            setIsSwiped(true)
        }
        if (endX - startX > 50) {
            setIsSwiped(false)
        }
    }

    function handleSave() {
        const archive = JSON.parse(localStorage.getItem('archive')) || []
        if (!archive.find((article) => article.url === url)) {
            archive.push({title, text, image, url})
            localStorage.setItem('archive', JSON.stringify(archive))
        }

        setIsSwiped(false)
    }

    return (
        <div className="article">
            <a 
                href={url}
                className={isSwiped ? 'article__content article__content--swiped' : 'article__content'}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <img src={image} alt="" />
                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </a>

            {onDelete ? (
                <button className="article__save article__save--delete" onClick={() => onDelete(url)}>
                    <FiTrash2 />
                </button>
            ) : (
                <button onClick={handleSave} className="article__save">
                    <FiBookmark />
                </button>
            )
        }
        </div>
    )
}

export default Article