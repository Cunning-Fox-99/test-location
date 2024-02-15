import React from 'react';
import icon from './icon.svg'
import './footer.scss'
export default function Footer() {

    return <footer className="footer">
        <div className="footer__back"><img src={icon} alt=""/>Go back</div>
        <div className="footer__button button">Continue</div>
    </footer>
}