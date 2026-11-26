import {useState} from 'react'
import logo from '../assets/logo.svg'

function CategorySwitch({name}) {
    const [isOn, setIsOn] = useState(localStorage.getItem(name) !== 'off')

    function handleClick() {
        setIsOn(!isOn)
        localStorage.setItem(name, isOn ? 'off' : 'on')
    }

    return (
        <div className="category-switch">
            <img src={logo} alt="" />
            <h3>{name}</h3>
            <button
            className={isOn ? 'switch switch--on' : 'switch'}
            onClick={handleClick}
            >
                <span className='switch__knob'></span>
            </button>
        </div>
    )
}

export default CategorySwitch