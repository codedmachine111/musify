import "./SpotifyPlayerCard.scss";
import SpotifyPlayer from "react-spotify-player";

export const SpotifyPlayerCard = (props) => {
  const { emotion, track } = props;

  const happyMusicGenres = [
    "happy",
    "sad",
    "surprised",
    "disgusted",
    "neutral",
  ];

  var genre = "";
  if (happyMusicGenres.includes(emotion)) {
    genre = "happy chill";
  } else {
    genre = "sad";
  }

  const uri = `spotify:track:${track.id}`
  const size = {
    width: '100%',
  };
  const view = 'coverart';
  const theme = 'black';

  return (
    <div className="spc-container">
      <div className="spc-title">
        {genre == "sad" ? (
          <>
            <h1>Soothe your soul!</h1>
          </>
        ) : (
          <>
            <h1>The Power of Happy Music!</h1>
          </>
        )}
      </div>
      <div className="spc-desc">
        {genre == "sad" ? (
          <>
            <p>
              Research has shown that listening to sad music can actually help
              improve our mood and provide a sense of comfort during difficult
              times. So why not take a moment to relax and listen to some
              calming tunes?
            </p>
          </>
        ) : (
          <>
            <p>
              Research shows that listening to upbeat music can boost your mood
              and energy levels. Happy music has a way of lifting your spirits
              and bringing joy to your day. So sit back, relax, and enjoy the
              positive vibes!
            </p>
          </>
        )}
      </div>
      <div className="spotify-player">
        <h2>
          Playing {track.name} by {track.artists[0].name}
        </h2>
        <SpotifyPlayer
        id="player"
          uri={uri}
          size={size}
          view={view}
          theme={theme}
        />

        <p>Listen to full track on Spotify</p>
      </div>
    </div>
  );
};
