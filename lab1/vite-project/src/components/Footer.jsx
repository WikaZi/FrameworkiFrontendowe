
import PropTypes from 'prop-types';

const Footer = ({ email }) => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img 
                    src="/path-to-university-logo.png" 
                    alt="University Logo" 
                    className="university-logo" 
                    width="100" 
                />
                <p>Autor aplikacji: <a href={`mailto:${email}`}>{email}</a></p>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    email: PropTypes.string.isRequired, 
};

export default Footer;
