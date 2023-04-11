import { useState } from "react"

const Navbar = () => {
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 60) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <nav className={color ? 'navbar active' : 'navbar'}>
            <div className="navbar__logo">
                <p>Modern<strong className="green">Art</strong><strong>.com</strong></p>
            </div>
            <div className="navbar__menu">
                <ul>
                    <li><a href="#">Log In</a></li>
                    <li><a href="#">Register</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar