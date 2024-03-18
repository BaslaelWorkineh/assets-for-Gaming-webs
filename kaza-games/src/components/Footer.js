import React from 'react';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'; // Import FontAwesome icons
import './Footer.css';

function Footer() {
  return (
    <div className='Footer'>
      <div className='topFooter'>
      <div className='backgroundImage'></div>
        <div className='topFooterContent'>
          <div className='text-Youtube'>
            <div className='textContent'>
              <h1>Join Our Community</h1>
              <p>In addition to our weekly online tournaments, we also host in-person events across the US in our venue network of partnered locations. Community Gaming has run over 100 events for the top global esports such as League of Legends, DOTA 2, CS:GO, Valorant, and Super Smash Bros, Ultimate.</p>
            </div>
            <div className='YoutubeContent'>
              {/* Add YouTube video here */}
              <iframe
                width="660"
                height="415"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div className='logos'>
            <div>
              <p>Follow Us On</p>
            {/* Render icons using react-icons */}
            <FaYoutube className='icon' />
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaInstagram className='icon' />
            <FaGithub className='icon' />
            </div>
            
          </div>
        </div>
      </div>
      <div className='bottomFooter'>
        <div>
          <p>Logo</p>
        </div>
        <div className='bottomFooter-navs'>
          <div>
            <h1>Explore</h1>
            <p>Explore</p>
            <p>LeaderBoard</p>
            <p>FAQ</p>
          </div>
          <div>
            <h1>Explore</h1>
            <p>Explore</p>
            <p>LeaderBoard</p>
            <p>FAQ</p>
          </div>
          <div>
            <h1>Explore</h1>
            <p>Explore</p>
            <p>LeaderBoard</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
