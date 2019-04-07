import React from 'react';

class AppNav extends React.Component{
    render(){
        return(
            <nav className="app-nav">
                <ul className="app-nav__list">
                    <li className="app-nav__item">
                        <a href="/" className="app-nav__link">Home</a>
                    </li>
                    <li className="app-nav__item">
                        <a href="/" className="app-nav__link">Education</a>
                    </li>
                    <li className="app-nav__item">
                        <a href="/" className="app-nav__link">Skills</a>
                    </li>
                    <li className="app-nav__item">
                        <a href="/" className="app-nav__link">Cases</a>
                    </li>
                    <li className="app-nav__item">
                        <a href="/" className="app-nav__link">Let's talk</a>
                    </li>
                </ul>
            </nav>
        )
    }
}



export default AppNav;