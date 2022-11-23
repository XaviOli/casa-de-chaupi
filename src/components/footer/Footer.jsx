import React from 'react'

import { FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import '../footer/Footer.css';
import Icon from '../icon/Icon';

export const Footer = () => {
  return (
        <footer>
            <div className="footer-links">
            <a href="https://bit.ly/3GO2UDU">
                <FaYoutube className="link" />
            </a>
            <> </>
            <a href="https://bit.ly/3V2SNiZ">
                <FaInstagram className="link" />
            </a>
            <> </>
            <a href="https://bit.ly/3GFYIq6">
                <FaPinterest className="link" />
            </a>
            </div>
            <p className="footer-text">
              Copyright © by Casa de Chaupi 2022.{" "}
            </p>
        </footer>
    )
}