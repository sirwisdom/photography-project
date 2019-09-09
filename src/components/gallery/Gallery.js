import React from 'react'
import './Gallery.css'
import "../images/project-1.jpg";
import '../images/project-2.jpeg';

export default function Gallery() {
    return (
        <React.Fragment>

            <h3>Our Gallery</h3>
        <div className='gallery-div'>
            <div className='proj proj-1' > </div>
               
            <div className='proj proj-2' >
                
            </div>
            <div className='proj proj-3 ' ></div>
            <div className='proj proj-4 ' ></div>
            <div className='proj proj-5 ' ></div>
            <div className='proj proj-6 ' ></div>
            <div className='proj proj-7 ' ></div>
            <div className='proj proj-8 ' ></div>
            
        </div>
        </React.Fragment>
    )
}
