import "./HomePage.scss";
import ImageUploadCard from "../../components/ImageUploadCard/ImageUploadCard";
import { VoiceInputCard } from "../../components/VoiceInputCard/VoiceInputCard";
import { Navbar } from "../../components/Navbar/Navbar";
import { SpotifyPlayerCard } from "../../components/SpotifyPlayerCard/SpotifyPlayerCard";
import { SongsListCard } from "../../components/SongsListCard/SongsListCard";
import { useContext } from "react";
import { PredictContext } from "../../App";
import { SongsContext } from "../../App";

export const HomePage = () => {
  const { predicted } = useContext(PredictContext);
  const { songs } = useContext(SongsContext);
  return (
    <>
      <Navbar />

      <div className="home-page-container">
        {predicted ? (
          <>
            <div className="home-content-container">
              <SpotifyPlayerCard emotion={predicted} />
              <SongsListCard tracks={songs} />
            </div>
          </>
        ) : (
          <>
            <div className="home-desc-container">
              <h1 id="title">
                <span id="diff">m</span>usify
              </h1>
              <p id="description">
                Welcome to Musify, a web application that detects your facial
                emotions and recommends music tailored to your mood. Explore the
                power of deep learning and image processing as Musifi analyzes
                your emotions, providing you with a personalized music
                experience like no other. Discover new tracks that resonate with
                your emotions and embark on a musical journey that moves with
                you. Try it out now!
              </p>
            </div>
            <div className="home-content-container">
              <h1 className="home-title">How we feeling today?</h1>
              <ImageUploadCard />
              <VoiceInputCard />
            </div>
          </>
        )}
      </div>
    </>
  );
};
