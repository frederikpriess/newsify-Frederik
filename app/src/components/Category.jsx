import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import logo from '../assets/logo.svg'

function Category({name}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className="category">
            <button className="category__header" onClick={() => setIsOpen(!isOpen)}>
                <img src={logo} alt="" />
                <h2>{name}</h2>
                {isOpen ? <FiChevronDown/> : <FiChevronRight/>}
            </button>

            {isOpen && <p>Her kommer artiklerne</p>}
        </section>
    )
}

export default Category