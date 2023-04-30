import "./SongsListCard.scss";
import SpotifyPlayer from "react-spotify-player";

export const SongsListCard = (props) => {
  const { tracks } = props;
  const size = {
    width: "40%",
  };
  const view = "coverart";
  const theme = "black";

  return (
    <>
      <div className="spotify-player">
        <h2>Reccommended melodies</h2>
        <div className="songs-list">
          {tracks.map((track) => {
            return (
              <SpotifyPlayer
                id="player"
                uri={`spotify:track:${track.id}`}
                size={size}
                view={view}
                theme={theme}
                key={track.id}
              />
            );
          })}
        </div>
        <p>Listen to full tracks on Spotify</p>
      </div>
    </>
  );
};
