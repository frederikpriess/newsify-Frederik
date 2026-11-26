import {useState} from 'react'
import logo from '../assets/logo.svg'

function CategorySwitch({name}) {
    const [isOn, setIsOn] = useState(true)

    return (
        <div className="category-switch">
            <img src={logo} alt="" />
            <h3>{name}</h3>
            <button
            className={isOn ? 'switch switch--on' : 'switch'}
            onClick={() => setIsOn(!isOn)}
            >
                <span className='switch__knob'></span>
            </button>
        </div>
    )
}

export default CategorySwitch