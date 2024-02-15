import React from 'react';
import './header.scss'
import logoSvg from './logo.svg'

export default function Header() {

    return <header className="header">
        <img src={logoSvg} alt=""/>
    </header>
}

