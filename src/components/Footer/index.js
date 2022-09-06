import React from 'react';
import githubIcon from '../../icons/github.png';
import linkedinIcon from '../../icons/linkedin.png';

function Footer() {

    return (
        <footer className="footer">
            <div className='icons'>
                <a href='https://github.com/theresa2013' target='blank'>
                    <img src={githubIcon} alt='GitHub icon' className='icon' />
                </a>
                <a href='https://www.linkedin.com/in/theresa-butterfield-7ab6698b/' target='blank'>
                    <img src={linkedinIcon} alt='LinkedIn icon' className='icon' />
                </a>
            </div>
        </footer>
    )
}


export default Footer;
