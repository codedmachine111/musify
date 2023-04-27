import "./HomePage.scss";
import ImageUploadCard from "../../components/ImageUploadCard/ImageUploadCard";
import { VoiceInputCard } from "../../components/VoiceInputCard/VoiceInputCard";
import { Navbar } from "../../components/Navbar/Navbar";
import { SpotifyPlayerCard } from "../../components/SpotifyPlayerCard/SpotifyPlayerCard";
import { useContext } from "react";
import { PredictContext } from "../../App";
import { SongContext } from "../../App";

export const HomePage = () => {
  const { predicted } = useContext(PredictContext);
  const { song } = useContext(SongContext);

  return (
    <>
      <Navbar />

      <div className="home-page-container">
        <div className="home-content-container">
          {predicted ? (
            <>
              <SpotifyPlayerCard track={song}/>
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
