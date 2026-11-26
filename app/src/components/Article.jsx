import { useState } from "react";
import { FiBookmark } from "react-icons/fi";

function Article({title, text, image, url}) {
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

            <button className="article__save">
                <FiBookmark />
            </button>
        </div>
    )
}

export default Article