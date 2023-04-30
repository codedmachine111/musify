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
        <div className="home-content-container">
          {predicted ? (
            <>
              <SpotifyPlayerCard tracks={songs}/>
              <SongsListCard tracks={songs}/>
            </>
          ) : (
            <>
              <ImageUploadCard />
              <VoiceInputCard />
            </>
          )}
        </div>
      </div>
    </>
  );
};
