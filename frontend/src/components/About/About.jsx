import React from 'react';
import "./about.css";
import details from './details';

const About = () => {
    return (
        <div className='containers'>
            <div className='header'>
                <h1>AboutUs</h1>
            </div>

            <div className='view'>
                {details.map(({ id, name, image, about, tags }) => (
                    <div key={id} className='content-box'>
                        <img className='pic' src={image} alt='ProfilePic' />
                        <div className='data'>
                            <h6 className='name'>{name}</h6>
                            <p className='about'>{about}</p>

                            <p className='skills'>Skills: </p>
                            <div className='tags'>
                                {tags.map((tag, i) => (
                                    <p className='tags2' key={i}>{tag}</p>
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
