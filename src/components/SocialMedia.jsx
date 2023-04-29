import React from "react";
import { BsTwitter, BsInstagram} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {GrLinkedin} from "react-icons/gr";
const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://twitter.com/AsadYasin20" target="_blank" rel="noopener noreferrer"><BsTwitter/>  </a>
    </div>
    <div>
    <a href="https://web.facebook.com/Asad.Yasin.7786" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
    </div>
    <div>
    <a href="https://www.instagram.com/meharjan68/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/asad-yasin-9ab3a316a/" target="_blank" rel="noopener noreferrer"><GrLinkedin /></a>
    </div>
  </div>
);

export default SocialMedia;
