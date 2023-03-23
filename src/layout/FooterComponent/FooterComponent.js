import React from 'react';

/* IMPORT STYLES */
import './FooterComponent.scss';

/* IMPORT FONTAWESOME */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

/* IMPORT LOGO */
import logo from '../../assets/images/filmshub-logo-text.svg';

const FooterComponent = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    return (
        // START FOOTER
        <footer className="footer">
            <div className="footer-container container">
                <section className='footer-menu__section section'>
                    <nav className='footer__nav nav'>
                        <ul className="footer__ul ul">
                            <li className="footer__li li"><a className='footer__a a' href='/'>Help center</a></li>
                            <li className="footer__li li"><a className='footer__a a' href='/'>Contact</a></li>
                            <li className="footer__li li"><a className='footer__a a' href='/'>Redeem code</a></li>
                            <li className="footer__li li"><a className='footer__a a' href='/'>Give FilmOut as a gift</a></li>
                            <li className="footer__li li"><a className='footer__a a' href='/'>Legal notice</a></li>
                            <li className="footer__li li"><a className='footer__a a' href='/'>Press</a></li>
                        </ul>
                    </nav>
                    <nav className='footer__nav-social nav'>
                        <ul className="footer__ul-social ul">
                            <li className="footer__li-social li"><a className='footer__a-social a' href='/'><FontAwesomeIcon icon={faTwitter}/></a></li>
                            <li className="footer__li-social li"><a className='footer__a-social a' href='/'><FontAwesomeIcon icon={faFacebook}/></a></li>
                            <li className="footer__li-social li"><a className='footer__a-social a' href='/'><FontAwesomeIcon icon={faInstagram}/></a></li>
                            <li className="footer__li-social li"><a className='footer__a-social a' href='/'><FontAwesomeIcon icon={faLinkedin}/></a></li>
                            <li className="footer__li-social li"><a className='footer__a-social a' href='/'><FontAwesomeIcon icon={faGithub}/></a></li>
                        </ul>
                    </nav>
                </section>
                <section className='footer-copyright__section section'>
                    <p className="footer-copyright__p p">Copyright FilmsHub © {getCurrentYear()}</p>
                    <a className='footer-logo__a a' href='/'><img src={logo} className='footer__logo img' alt='logo'/></a>
                </section>
            </div>
        </footer>
        // END FOOTER
    )
}

export default FooterComponent