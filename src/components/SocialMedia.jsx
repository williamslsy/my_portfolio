import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/dev_waliba">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/williamslsy/my_portfolio">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://instagram.com/bos_rules">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
