import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>About</li>
                        <li>Galery</li>
                    </ul>
                </nav>
                <div className='header-text'>
                <h1>Photography at it's Peak</h1>
                <h4>We deliver superior quality photography, that makes us stand out</h4>
                </div>
            </header>
        </div>
    )
}
