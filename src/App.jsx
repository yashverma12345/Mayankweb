import React, { useEffect, useState } from "react";
import "./App.css";
import aise from "./imgvid/Aiseaazmaat.jpg";
import aakhri from "./imgvid/AAkhrisawal.jpg";
import intro from "./imgvid/FINAL.mp4";
import instagram from "./imgvid/instagram.png";
import spotify from "./imgvid/spotify.png";
import udaan from "./imgvid/Udaan.jpg";
import valentine from "./imgvid/valentine.jpg";
import youtube from "./imgvid/Youtube.png";
import envelop from "./imgvid/envelop.png";

function App() {
    const [showVideo, setShowVideo] = useState(true);

    const handleVideoEnd = () => {
        setShowVideo(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            document.body.style.backgroundPositionY = `${scrollY * -4}px`;
        };

        window.addEventListener("scroll", handleScroll);

        // Ensure event listeners are added after the video has finished
        if (!showVideo) {
            const button = document.querySelector(".support");
            const content = document.querySelector(".dropdown-content");

            if (button && content) {
                button.addEventListener("click", () => {
                    button.classList.toggle("active");
                    let textNode = button.childNodes[0];
                    if (textNode.nodeType === 3) {
                        textNode.nodeValue = button.classList.contains("active") ? "Support Please " : "Support ";
                    }
                    content.classList.toggle("show");
                });
            }
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showVideo]);

    return (
        <>
            <div>
                {showVideo ? (
                    <video src={intro} autoPlay muted onEnded={handleVideoEnd} style={{ width: "100%", height: "200%" }} />
                ) : (
                    <div className="content-wrapper">
                        <div className="circle"></div>
                        <div className="text1">
                            <b> Mayank Verma</b>
                            <br /> <br />I am Mayank Verma, an Indian Independent artist hailing from Delhi, and I wear multiple hats as a music producer, composer, and singer-songwriter. Rooted in
                            Saharanpur, Uttar Pradesh, my musical style blends acoustic hues, keys, and guitar, crafting a captivating narrative that resonates with heartfelt emotions.
                        </div>

                        <div className="icons">
                            <a href="https://insta.openinapp.co/8q5ex"><img src={instagram} alt="Instagram" /></a>
                            <a href="https://spotify.openinapp.co/rcm28"><img src={spotify} alt="Spotify" /></a>
                            <a href="https://yt.openinapp.co/b5z79"><img src={youtube} alt="YouTube" /></a>
                            <a href="mailto:officialmayankmusic@gmail.com"><img src={envelop} alt="" /></a>
                        </div>
                        <div className="text2">
                            Harmonizing life's highs and lows through the language of music.
                            <br />
                            <br />
                            <br />
                            <br />
                            Here we go...
                        </div>

                        <div className="recent">
                            My recent release
                           <a href="https://yt.openinapp.co/mh8nk"> <div className="diary"></div></a>
                        </div>
                        <hr />

                        <div className="smalltext">My Originals</div>
                        <div className="newhr">
                            <hr />
                        </div>
                        <div className="smallcontainers">
                            <div className="box">
                               <a href="https://yt.openinapp.co/tsrjh"> <img src={aise} alt="" /></a>
                                <br />
                                <br />
                                Kaise Aazmaate (Original)~Mayank Verma
                            </div>
                            <div className="box">
                                <a href="https://yt.openinapp.co/lo1f2"><img src={udaan} alt="" /></a>
                                <br />
                                <br />
                                Ek Ummeed (Original) ~ Mayank Verma
                            </div>
                            <div className="box">
                                <a href="https://yt.openinapp.co/980g0"><img src={aakhri} alt="" /></a>
                                <br />
                                <br />
                                Aakhri Sawal (original)~ Mayank Verma
                            </div>
                            <div className="box">
                                <a href="https://yt.openinapp.co/tsy08"><img src={valentine} alt="" /></a>
                                <br />
                                <br />
                                Deewana tera (Original)~ Manyank Verma
                            </div>
                        </div>

                       <a href="https://spotify.openinapp.co/rcm28"> <button className="spotify">View my spotify store</button></a>
                        <button className="support">
                            Support
                            <i className="fa-solid fa-angle-down"></i>
                        </button>

                        <div className="dropdown-content">
                            <p>
                                The time and effort I put into my art are fueled by your passion and engagement. To continue creating new pieces like this, consider showing your support through a
                                financial contribution. Together, we can bring even more creativity to life! <br /> <br /> <br /> <strong>UPI-vermamayank321-1@oksbi</strong>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
