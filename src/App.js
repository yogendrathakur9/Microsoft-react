import React from "react";
import './index.css'
import NavLogo from './images/microsoft logo.png'
import HeroImg from './images/Hero-img.avif'
import Sec_2img1 from "./images/sec-2img1.webp"
import Sec_2img2 from "./images/sec-2img2.webp"
import Sec_2img3 from "./images/sec-2img3.webp"
import sec_3img1 from "./images/sec-3img1.webp"
import sec_3img2 from "./images/sec-3img2.webp"
import sec_3img3 from "./images/sec-3img3.webp"
import sec_3img4 from "./images/sec-3img4.webp"
import sec_5img1 from "./images/sec-5img1.webp"
import sec_5img2 from "./images/sec-5img2.webp"
import sec_5img3 from "./images/sec-5img3.webp"
import sec_5img4 from "./images/sec-5img4.webp"
import facebook_icon from "./images/Facebook-sec5.avif"
import twitter_icon from "./images/Twitter-sec5.webp"
import youtube_icon from "./images/YouTube-sec5.webp"
function App(){
  return(
    <>
  {/* Navbar */}
     
    <nav>
    { /* left side links */}
      <div className="navleft">
        <img src={NavLogo} alt="logo" />
        <ul>
          <li>Microsoft 365</li>
          <li>Teams</li>
          <li>Windows</li>
          <li>Surface</li>
          <li>Xbox</li>
          <li>Support</li>
        </ul>
      </div>
      {/* right side links */}
      <div className="navright">
        <ul>
          <li>All Microsoft</li>
          <li>
            <i className="bi bi-search" />
          </li>
          <li>
            <i className="bi bi-cart3" />
          </li>
          <li>
            <i className="bi bi-person-circle" />
          </li>
        </ul>
      </div>
      <div className="nav768">
        <span>
          <i className="bi bi-list" />
          <i className="bi bi-search" />
        </span>
        <img src="images/microsoft logo.png" alt="logo" />
        <span>
          <i className="bi bi-cart3" />
          <i className="bi bi-person-circle" />
        </span>
      </div>
    </nav>
    <div className="Hero-section">
      <div className="Hero-text">
        <h1>Microsoft 365</h1>
        <p>
          Premium Office apps, extra cloud storage, <br /> advanced security, and
          more – all in one convenient <br />
          subscription
        </p>
        <button>For 1 person</button> &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#"> For up to 6 people</a>
      </div>
      <div className="Hero-img">
        <img src={HeroImg} alt="img" />
      </div>
    </div>
    <div className="section-2">
      <div className="sec-2">
        <div className="sec-2img">
          <img src={Sec_2img1} alt="img" />
          <a href="#">Choose your Microsoft 365</a>
        </div>
        <div className="sec-2img">
          <img src={Sec_2img2} alt="img" />
          <a href="#">Explore Surface devices</a>
        </div>
        <div className="sec-2img">
          <img src={Sec_2img3} alt="img" />
          <a href="#">Buy Xbox games</a>
        </div>
        <div className="sec-2img">
          <img src={Sec_2img1} alt="img" />
          <a href="#">Get Windows 11</a>
        </div>
      </div>
    </div>
    <div className="section-3">
      <div className="sec-3">
        <div className="sec-3img1 sec-3g">
          <img src={sec_3img1} alt="img" />
          <h1>Surface Laptop Go 2</h1>
          <p>
            A sleek laptop with a 12.4-inch touchscreen, great typing experience
            and improved HD camera.
          </p>
          <a href="#">Learn more &gt; </a>
        </div>
        <div className="sec-3img2 sec-3g ">
          <img src={sec_3img2} alt="img" />
          <h1>Surface Laptop 4</h1>
          <p>
            Do it all with a perfect balance of sleek, ultra-thin design,
            multitasking speed and improved performance.
          </p>
          <a href="#">Shop now &gt; </a>
        </div>
        <div className="sec-3img3 sec-3g">
          <img src={sec_3img3} alt="img" />
          <h1>PC Game Pass</h1>
          <p>
            Unlock 100+ great games and EA Play, plus get your first month for
            ₹50. Offer available to new subscribers only.
          </p>
          <a href="#">Join now &gt; </a>
        </div>
        <div className="sec-3img4 sec-3g">
          <img src={sec_3img4} alt="img" />
          <h1>Designed for life today – and tomorrow</h1>
          <p>
            The next-generation of games. Your goals. Friends and family. Windows
            11 was made to bring you closer to everything you love.
          </p>
          <a href="#">See if your PC is ready &gt; </a>
        </div>
      </div>
    </div>
    <div className="section-4">
      <div className="sec-4img"></div>
      <div className="sec-4text">
        <h1>Microsoft Edge</h1>
        <p>
          World-class performance with more privacy, more productivity and more
          value while you browse
        </p>
        <button>Download Now</button>
      </div>
    </div>
    <div className="section-5">
      <h1>For business</h1>
      <div className="sec-5">
        <div className="sec-5g">
          <img src= {sec_5img1} alt="img" />
          <h1>Surface Laptop Go 2 for Business</h1>
          <p>
            A sleek, portable laptop featuring a great typing experience, Windows
            11 Pro and professional-grade performance.
          </p>
          <a href="#">Learn more &gt; </a>
        </div>
        <div className="sec-5g">
          <img src={sec_5img2} alt="img" />
          <h1>Get Microsoft Teams for free</h1>
          <p>
            Online meetings, chat and shared cloud storage – all in one place.
          </p>
          <a href="#">Sign up for free &gt; </a>
        </div>
        <div className="sec-5g">
        <img src={sec_5img3} alt="img" />
          <h1>Microsoft 365 for business</h1>
          <p>
            Stay a step ahead with powerful apps for productivity, connection and
            security.
          </p>
          <a href="#">Shop now &gt; </a>
        </div>
        <div className="sec-5g">
        <img src={sec_5img4} alt="img" />
          <h1> Windows 11 for business is here</h1>
          <p>
            Designed for hybrid work. Powerful for employees. Consistent for IT.
            Secure for all.
          </p>
          <a href="#">Learn more &gt; </a>
        </div>
      </div>
      <div className="sec-5icon">
        <h3>Follow Microsoft</h3>
        <img src={facebook_icon} alt="img" />
        <img src={twitter_icon} alt="img" />
      <img src={youtube_icon} alt="img" />
      </div>
    </div>
    <div className="section-6">
      <div className="lists">
        <div className="list1">
          <ul>
            <li>
              <b>What's new</b>
            </li>
            <li>Microsoft 365</li>
            <li>Surface Pro X</li>
            <li>Surface Pro 7</li>
            <li>Surface Laptop 3</li>
            <li>Windows 11 apps</li>
          </ul>
        </div>
        <div className="list2">
          <ul>
            <li>
              <b>Microsoft Store</b>
            </li>
            <li>Account profile</li>
            <li>Download Center</li>
            <li>Microsoft Store Support</li>
            <li>Returns</li>
            <li>Order tracking</li>
          </ul>
        </div>
        <div className="list3">
          <ul>
            <li>
              <b>Education</b>
            </li>
            <li>Microsoft in education</li>
            <li>Devices for education</li>
            <li>Microsoft Teams for Education</li>
            <li>Microsoft 365 Education</li>
            <li>Office Education</li>
            <li>Educator training and development</li>
            <li>Educator training and development</li>
            <li>Azure for students</li>
          </ul>
        </div>
        <div className="list4">
          <ul>
            <li>
              <b>Business</b>
            </li>
            <li>Microsoft Cloud</li>
            <li>Microsoft Security</li>
            <li>Azure</li>
            <li>Dynamics 365</li>
            <li>Microsoft 365</li>
            <li>Microsoft Advertising</li>
            <li>Microsoft Industry</li>
            <li>Microsoft Teams</li>
          </ul>
        </div>
        <div className="list5">
          <ul>
            <li>
              <b>Developer &amp; IT</b>
            </li>
            <li>Developer &amp; IT</li>
            <li>Documentation</li>
            <li>Microsoft Learn</li>
            <li> Microsoft Tech Community</li>
            <li>Azure Marketplace</li>
            <li>AppSource</li>
            <li>Microsoft Power Platform</li>
            <li>Visual Studio</li>
          </ul>
        </div>
        <div className="list6">
          <ul>
            <li>
              <b>Company</b>
            </li>
            <li>Careers</li>
            <li>About Microsoft</li>
            <li>Company news</li>
            <li>Privacy at Microsoft</li>
            <li>Investors</li>
            <li>Security</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="footer-left">
        <li>
          {" "}
          <i className="bi bi-globe" />
        </li>
        <p>English (India)</p>
      </div>
      <div className="footer-right">
        <p> Contact Microsoft</p>
        <p> Privacy</p>
        <p> Terms of use</p>
        <p> Trademarks</p>
        <p> About our ads</p>
        <p> © Microsoft 2022</p>
      </div>
    </div>
  </>
  
  );
}
export default App