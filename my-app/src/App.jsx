// App.js
import React, { useEffect, useRef } from 'react';
import './App.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);


  

  return (
    <div id="main" ref={scrollRef}>
      <div id="page">
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/hero/large_2x.mp4"
          muted
          playsInline
        ></video>
        <nav>
          <h3>Vision Pro</h3>
          <button>Notify me</button>
        </nav>
        <div id="page-bottom">
          <h3>Introduction</h3>
          <img
            src="https://www.apple.com/v/apple-vision-pro/a/images/overview/hero/apple_vision_pro_logo__ux94yix23r6y_large.png"
            alt=""
          />
        </div>
      </div>
      <div id="page1">
        <h1>Welcome to the era of spatial computing</h1>
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-spatial-computing/large.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div id="page2">
        <h1>Apple Vision Pro seamlessly blends <br /> digital content with your physical space.</h1>
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-digital-canvas/large.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div id="page3">
        <div id="page3-upper">
          <img
            src="https://www.apple.com/v/apple-vision-pro/a/images/overview/intro/logo__4zgkuyebgtem_large.png"
            alt=""
          />
          <div id="page3-upper-inner">
            <h3>WATCH THE FILM</h3>
            <h3>WATCH THE EVENT ></h3>
          </div>
        </div>
        <img src="./Apple vision image.png" alt="" />
        <button> + Take a closer look at Vision Pro</button>
      </div>
      <div id="page4">
        <div id="center-page4">
          <h5>Apps</h5>
          <h1>
            Free your desktop.
            <br />
            And your apps will follow.
          </h1>
        </div>
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/visionos/large.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div id="page5">
        <div className="left5">
          <h1>Your apps live in <br /> your space.</h1>
        </div>
        <div className="right5">
          <h3>
            With Vision Pro, you have an infinite canvas that transforms how you use the apps you love. Arrange apps anywhere and scale them to the perfect size, making the workspace of your dreams a reality — all while staying present in the world around you. Browse the web in Safari, create a to-do list in Notes, chat in Messages, and seamlessly move between them with a glance.
          </h3>
          <button> + Learn more about apps</button>
        </div>
      </div>
      <div id="page6">
        <h3>Design</h3>
        <h1>Designed by Apple.</h1>
        <p>
          Apple Vision Pro is the result of decades of experience designing high‑performance, mobile, and wearable devices — culminating in the most ambitious product Apple has ever created. Vision Pro integrates incredibly advanced technology into an elegant, compact form, resulting in an amazing experience every time you put it on.
          <br />
          Enclosure. A singular piece of three-dimensionally formed laminated glass flows into an aluminum alloy frame that curves to wrap around your face.
          <br />
          Light Seal. The Light Seal
        </p>
      </div>
      <div id="page7">
        <canvas></canvas>
      </div>
      <div id="page8">
        <h1>
          <span>Enclosure</span> A singular piece of three-dimensionally formed laminated glass flows into an aluminum alloy frame that curves to wrap around your face.
        </h1>
      </div>
      <div id="page9">
        <h1>
          <span>Light Seal.</span> The Light Seal gently flexes to conform to your face, delivering a precise fit while blocking out stray light.
        </h1>
      </div>
      <div id="page10">
        <h1>
          <span> Head Band. </span>The Head Band provides cushioning, breathability, and stretch. The Fit Dial lets you adjust Vision Pro precisely to your head.
        </h1>
      </div>
      <div id="page11">
        <h1>
          <span> Power. </span>The external battery supports up to 2 hours of use, and all‑day use when plugged in.1
        </h1>
      </div>
      <div id="page12">
        <h1>
          <span>Sound. </span>Speakers positioned close to your ears deliver rich Spatial Audio while keeping you aware of your surroundings.
        </h1>
      </div>
      <div id="page13">
        <h1>
          <span>EyeSight.</span> An outward display reveals your eyes while wearing Vision Pro, letting others know when you are using apps or fully immersed.
        </h1>
      </div>
      <div id="page14">
        <div className="left14"></div>
        <div className="right14"></div>
      </div>
      <div id="page15">
        <div id="center-page15">
          <video
            src="https://www.apple.com//105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/glass/large_2x.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
      <div id="page16">
        <h2>
          A singular piece of <span>three-dimensionally formed laminated glass</span> acts as an optical surface for the cameras and sensors that view the world. It flows seamlessly into a custom aluminum alloy frame that gently curves to wrap around your face while serving as an attachment point for the <span>Light Seal.</span>
        </h2>
        <img
          src="https://www.apple.com/v/apple-vision-pro/a/images/overview/design/light_seal__fo87cv0zkcmm_large.jpg"
          alt=""
        />
        <button>+ Learn more about design</button>
      </div>
      <div id="page17">
        <h4>Technology</h4>
        <h1>Innovation you can <br /> see, hear, and feel.</h1>
        <p>
          <span>Pushing boundaries from the inside out.</span> Spatial experiences on Vision Pro are only possible through groundbreaking Apple technology. Displays the size of a postage stamp that deliver more pixels than a 4K TV to each eye. Incredible advances in Spatial Audio. A revolutionary dual‑chip design featuring custom Apple silicon. A sophisticated array of cameras and sensors. All the elements work together to create an unprecedented experience you have to see to believe.
        </p>
      </div>
      <div id="page18">
        <canvas></canvas>
      </div>
      <div id="page19">
        <h1>More pixels than a 4K TV. For each eye.</h1>
        <h5>
          The custom micro‑OLED display system features 23 million pixels, delivering stunning resolution and colors. And a specially designed three‑element lens creates the feeling of a display that’s everywhere you look.
        </h5>
      </div>
      <div id="page20">
        <h1>Sharp, vivid movies, shows, and games.</h1>
        <h3>
          With two ultra-high-resolution displays, Apple Vision Pro can transform any space into your own personal movie theater with a screen that feels 100 feet wide — and an advanced Spatial Audio system. You can also enjoy incredibly immersive entertainment, like the exciting games on Apple Arcade.
        </h3>
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/display-digital-canvas/large.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div id="page21">
        <div id="center-page21">
          <h5>Custom micro‑OLED displays.</h5>
          <h1>23 million pixels.</h1>
        </div>
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/display-infinite-canvas/large.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div id="page22">
        <div className="left22"></div>
        <div className="right22"></div>
      </div>
      <div id="page23">
        <canvas></canvas>
      </div>
      <div id="page24">
        <h1>Renders your world.</h1>
        <h3>
          The Vision Pro display system uses an advanced Spatial Audio engine that works with sound
          fields to create lifelike experiences. And with hundreds of local dimming zones, the micro‑OLED
          display brings amazing sharpness and clarity.
        </h3>
      </div>
      <div id="page25">
        <h1>Clarity from edge to edge.</h1>
        <h3>
          The custom three‑element lens creates a superb image, edge to edge, with extremely high
          fidelity, across an impressive field of view. Each lens is tuned for a precise, personalized fit,
          with adjustable lenses that accommodate a wide range of interpupillary distances.
        </h3>
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/lens/large.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div id="page26">
        <h1>The wide field of view feels natural.</h1>
        <h3>
          By taking advantage of Vision Pro’s incredible hardware and software, Apple has made it possible
          to place digital content directly in your view. The combination of the micro‑OLED display system,
          the three‑element lens, and custom Apple silicon creates an image so sharp it feels like it’s a
          part of your world.
        </h3>
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/more/large.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    </div>
  );
};

export default App;
