import React from 'react';

class SocialList extends React.Component{
    render() {
        return(
            <ul className="social-list">
                <li className="social-list__item">
                    <a href="/" className="social-list__link icon-facebook" rel="nofollow" target="_blank">

                    </a>
                </li>
                <li className="social-list__item">
                    <a href="/" className="social-list__link icon-instagram" rel="nofollow" target="_blank">

                    </a>
                </li>
                <li className="social-list__item">
                    <a href="https://github.com/nazariy1717/" className="social-list__link icon-github" rel="nofollow" target="_blank">

                    </a>
                </li>
                <li className="social-list__item">
                    <a href="/" className="social-list__link icon-linkedin2" rel="nofollow" target="_blank">

                    </a>
                </li>
            </ul>
        )
    }
}