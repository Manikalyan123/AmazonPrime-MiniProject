import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <>
    <div className="footer-container">
      <button type="button" className="icon-Button">
        <FaGoogle />
      </button>
      <button type="button" className="icon-Button">
        <FaTwitter />
      </button>
      <button type="button" className="icon-Button">
        <FaInstagram />
      </button>
      <button type="button" className="icon-Button">
        <FaYoutube />
      </button>
    </div>
    <p className="contact-us-footer">Contact us </p>
  </>
)
export default Footer
