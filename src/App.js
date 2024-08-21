import React from 'react';
import './App.css';
import logo from './logo.png'; 
import story from './story.png'; 
import keys from './1.png'; 
import casec from './2.png'; 
import stand from './3.png'; 
import bizness from './4.png'; 
import hard from './5.png'; 
import tech from './6.png'; 
import school from './7.png'; 
import wallet from './8.png'; 
import batty from './9.png'; 
import knife from './10.png'; 
import skate from './11.png'; 
import whistle from './12.png'; 
import clip from './13.png'; 
import fish from './14.png'; 
import sunny from './15.png'; 
import tool from './16.png';
import bro from './17.jpg'; 
import bro1 from './18.JPG'; 
import bro2 from './19.JPG'; 
import bro3 from './20.jpg';

function App() {
  return (
    <div className="App">
      {/* Header with Logo */}
      <header className="site-header">
  <div className="container">
    <div className="logo-text-container">
      <img src={logo} alt="The Brik Logo" className="logo" />
      <h1>Organize Your Essentials, Unleash Your Potential with The Brik</h1>
    </div>
  </div>
</header>





      {/* Base Kit Section */}
      <section className="base-kit">
        <div className="container">
          <h2>Your Daily Companion Awaits You!</h2>
          <p>Base Kit</p>
          <div className="product-grid">
            <div className="product-item">
              <img src={casec} alt="Carrying Case" />
              <h3>Carrying Case</h3>
            </div>
            <div className="product-item">
              <img src={wallet} alt="Wallet" />
              <h3>Wallet</h3>
            </div>
            <div className="product-item">
              <img src={keys} alt="Keys Holder" />
              <h3>Keys Holder</h3>
            </div>
            <div className="product-item">
              <img src={stand} alt="Phone Stand" />
              <h3>Phone Stand</h3>
            </div>
          </div>
          <h2>$55</h2>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="addons">
        <div className="container">
          <h2>Add-ons</h2>
          <div className="product-grid">
            <div className="product-item">
              <img src={bizness} alt="Business Card Case" />
              <h3>Business Card Case</h3>
              <p>$20</p>
            </div>
            <div className="product-item">
              <img src={school} alt="School Tools Card" />
              <h3>School Tools Card</h3>
              <p>$45</p>
            </div>
            <div className="product-item">
              <img src={knife} alt="Wilderness Tools Card" />
              <h3>Wilderness Tools Card</h3>
              <p>$45</p>
            </div>
            <div className="product-item">
              <img src={tech} alt="Technical Card" />
              <h3>Technical Card</h3>
              <p>$25</p>
            </div>
            <div className="product-item">
              <img src={hard} alt="Utility Card" />
              <h3>Utility Card</h3>
              <p>$10</p>
            </div>
            <div className="product-item">
              <img src={batty} alt="Portable Battery" />
              <h3>Portable Battery</h3>
              <p>$35</p>
            </div>

            {/* Repeat for other add-ons */}
          </div>
        </div>
      </section>

      {/* Future Add-ons Section */}
      <section className="future-addons">
        <div className="container">
          <h2>Future Add-ons - Coming Soon</h2>
          <div className="product-grid">
            <div className="product-item">
              <img src={skate} alt="Skateboard Tool Card" />
              <h3>Skateboard Tool Card</h3>
              <p>$15</p>
            </div>
            <div className="product-item">
              <img src={whistle} alt="Whistle + Pepper Spray" />
              <h3>Whistle + Spray</h3>
              <p>$30</p>
            </div>
            <div className="product-item">
              <img src={tool} alt="Industrial Tool Card" />
              <h3>Industrial Tool Card</h3>
              <p>$15</p>
            </div>
            <div className="product-item">
              <img src={clip} alt="Money Clip" />
              <h3>Money Clip</h3>
              <p>$10</p>
            </div>
            <div className="product-item">
              <img src={fish} alt="Fishing Kit Card" />
              <h3>Fishing Kit Card</h3>
              <p>$45</p>
            </div>
            <div className="product-item">
              <img src={sunny} alt="Flat Sunglasses" />
              <h3>Flat Sunglasses</h3>
              <p>$25</p>
            </div>
            {/* Repeat for other future add-ons */}
          </div>
        </div>
      </section>


            {/* Future Add-ons Section */}
            <section className="holders">
        <div className="container">
          <h2>Holders by keychain - Coming Soon</h2>
          <div className="product-grid">
            <div className="product-item">
              <img src={whistle} alt="Carabiner" />
              <h3>Brik Carbiner</h3>
              <p>$10</p>
            </div>
            <div className="product-item">
              <img src={tool} alt="Chapstick Holder" />
              <h3>Chapstick Attachment</h3>
              <p>$10</p>
            </div>
            <div className="product-item">
              <img src={clip} alt="Airpods Holder" />
              <h3>Airpods Chain</h3>
              <p>$10</p>
            </div>
            {/* Repeat for other future add-ons */}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <img src={story} alt="Our Story" />
            <div className="text">
              <h2>Our Story</h2>
              <p>It all started with a simple but frustrating problem: the daily struggle of finding lost keys, wallets, and other essential items. Like so many others, I found myself constantly patting my pockets, searching my backpack, and retracing my steps to find the things I needed the most. The breaking point came during my freshman year when I misplaced my dorm keys and wallet—an ordeal that cost me $200 and endless frustration. Not only was I locked out of my dorm and car, but I also had to replace all my credit cards, adding to the hassle.</p>
              <p>This wasn't just a problem I faced. In a survey I conducted, 450 out of 500 people admitted to experiencing the same issue. It was clear that everyday essentials take up too much space, get lost too easily, and create unnecessary stress. There had to be a better way to keep everything organized, secure, and easily accessible.</p>
              <p>That’s when the idea for The Brik was born.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="instagram-section">
      <div className="container">
        <h2>Follow us on Instagram!</h2>
        <div className="instagram-grid">
          <div className="instagram-item">
            <img src={bro} alt="The Brik on Instagram 1" />
          </div>
          <div className="instagram-item">
            <img src={bro2} alt="The Brik on Instagram 2" />
          </div>
          <div className="instagram-item">
            <img src={bro3} alt="The Brik on Instagram 3" />
          </div>
          <div className="instagram-item">
            <img src={bro1} alt="The Brik on Instagram 4" />
          </div>
        </div>
        <div className="instagram-button-container">
          <a href="https://www.instagram.com/the.brik" target="_blank" rel="noopener noreferrer">
            <button className="instagram-button">Instagram</button>
          </a>
        </div>
      </div>
    </section>


      {/* Newsletter Signup Section */}
      <section className="newsletter-signup">
        <div className="container">
          <h2>Wanna be informed when we launch!</h2>
          <form>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2024 The Brik. All rights reserved.</p>
          <p>Location: Ames, IA, USA | Contact: <a href="mailto:the.brik.biz@gmail.com">the.brik.biz@gmail.com</a></p>
        </div>
      </footer>

    </div>
  );
}

export default App;
