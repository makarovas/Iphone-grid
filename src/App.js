import React, {Component} from 'react';
import './index.css';

import wifisignal from './icons/wifisignal.svg';
import moon from './icons/moon.svg';
import bluetooth from './icons/bluetooth.svg';
import battery from './icons/battery.svg';

import Facetime from './icons/Facetime.png';
import Calendar from './icons/Calendar.png';
import Photos from './icons/Photos.png';
import Camera from './icons/Camera.png';
import Weather from './icons/Weather.png';
import Clock from './icons/Clock.png';
import Maps from './icons/Maps.png';
import Videos from './icons/Videos.png';
import Notes from './icons/Notes.png';
import Reminders from './icons/Reminders.png';
import Stocks from './icons/Stocks.png';
import Games from './icons/Games.png';
import News from './icons/News.png';
import iTunesstore from './icons/iTunesstore.png';
import AppStore from './icons/AppStore.png';
import Books from './icons/Books.png';
import Health from './icons/Health.png';
import Passbook from './icons/Passbook.png';
import Settings from './icons/Settings.png';
import YourApp from './icons/YourApp.png';

import Messages from './icons/Messages.png';
import Mail from './icons/Mail.png';
import Safari from './icons/Safari.png';
import iTunes from './icons/Itunes.png';


import Time from './time.js'

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="main-header--left">
          <svg height="12" width="12">
            <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1" fill="white"/>
          </svg>
          <svg height="12" width="12">
            <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1" fill="white"/>
          </svg>
          <svg height="12" width="12">
            <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1" fill="white"/>
          </svg>
          <svg height="12" width="12">
            <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1" fill="white"/>
          </svg>
          <svg height="12" width="12">
            <circle cx="6" cy="6" r="5" stroke="white" strokeWidth="1" fill="transparent"/>
          </svg>
          <span>El</span>
          <img src={wifisignal} alt="wi-fi"/>
        </div>
        <Time/>
        <div className="main-header--right">
          <img src={moon} alt="moon"/>
          <img src={bluetooth} alt="bluetooth"/>
          <span>50%</span>
          <img src={battery} alt="battery"/>
        </div>
      </header>
    )
  }
}


class Main extends Component {
  
  render() {
    return (
      <main>
        <section className="main-section">
          <h1 className="visually-hidden">icons list</h1>
          <ul className="icons">
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Facetime} width="120" height="120" alt="icon"/>
              </a>
              <span>Facetime</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Calendar} width="120" height="120" alt="icon"/>
              </a>
              <span>Calendar</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Photos} width="120" height="120" alt="icon"/>
              </a>
              <span>Photos</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Camera} width="120" height="120" alt="icon"/>
              </a>
              <span>Camera</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Weather} width="120" height="120" alt="icon"/>
              </a>
              <span>Weather</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Clock} width="120" height="120" alt="icon"/>
              </a>
              <span>Clock</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Maps} width="120" height="120" alt="icon"/>
              </a>
              <span>Maps</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Videos} width="120" height="120" alt="icon"/>
              </a>
              <span>Videos</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Notes} width="120" height="120" alt="icon"/>
              </a>
              <span>Notes</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Reminders} width="120" height="120" alt="icon"/>
              </a>
              <span>Reminders</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Stocks} width="120" height="120" alt="icon"/>
              </a>
              <span>Stocks</span>
            </li>
            <li className="item item-long-string ">
              <a href="../public/index.html">
                <img src={Games} width="120" height="120" alt="icon"/>
                <div className="item-new">
                  <span>1</span>
                </div>
              </a>
              <span>Game Center</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={News} width="120" height="120" alt="icon"/>
              </a>
              <span>Newsstand</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={iTunesstore} width="120" height="120" alt="icon"/>
              </a>
              <span>iTunes Store</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={AppStore} width="120" height="120" alt="icon"/>
              </a>
              <span>App Store</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Books} width="120" height="120" alt="icon"/>
              </a>
              <span>iBooks</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Health} width="120" height="120" alt="icon"/>
              </a>
              <span>Health</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Passbook} width="120" height="120" alt="icon"/>
              </a>
              <span>Passbook</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Settings} width="120" height="120" alt="icon"/>
              </a>
              <span>Settings</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={YourApp} width="120" height="120" alt="icon"/>
              </a>
              <span>Your App</span>
            </li>
          </ul>
        </section>
      </main>
    )
  }
}


class Footer extends Component {
  render() {
    return (
      <footer>
        <nav>
          <div className="ul-toggle">
            <div className="toggle-default"/>
            <div className="toggle-default active"/>
            <div className="toggle-default"/>
            <div className="toggle-default"/>
            <div className="toggle-default"/>
          </div>
          <ul className="footer-nav">
            <li className="item item-long-string">
              
              <a href="../public/index.html">
                <img src={Messages} width="120" height="120" alt="icon"/>
                <div className="item-new">
                  <span>1</span>
                </div>
              </a>
              <span>Messages</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Mail} width="120" height="120" alt="icon"/>
              </a>
              <span>Mail</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={Safari} width="120" height="120" alt="icon"/>
              </a>
              <span>Safari</span>
            </li>
            <li className="item item-long-string">
              <a href="../public/index.html">
                <img src={iTunes} width="120" height="120" alt="icon"/>
              </a>
              <span>iTunes</span>
            </li>
          
          </ul>
        </nav>
      </footer>
    )
  }
}

export default class Page extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
    )
    
  }
}





