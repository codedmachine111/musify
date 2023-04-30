import axios from "axios";
import { Buffer } from "buffer";


// const SPOTIFY_CLIENT_ID = "230fac4104c4462280da56bb88bed015";
// const SPOTIFY_CLIENT_SECRET = "0f6566c81ad642399610d7c32ee46401";

const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET

console.log(SPOTIFY_CLIENT_ID)
console.log(SPOTIFY_CLIENT_SECRET)

let accessToken = "";

const getSpotifyAccessToken = async (client_id, client_secret) => {
  const formData = new URLSearchParams();
  formData.append("grant_type", "client_credentials");

  await axios
    .post("https://accounts.spotify.com/api/token", formData, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          client_id + ":" + client_secret
        ).toString("base64")}`,
      },
    })
    .then((res) => {
      accessToken = res.data.access_token;
      const expiresIn = res.data.expires_in;

      // Set a timeout to automatically refresh the token when it expires
      setTimeout(() => {
        getSpotifyAccessToken(client_id, client_secret);
      }, (expiresIn - 60) * 1000); // Refresh 1 minute before expiration
    });
  return accessToken;
};

const getAccessToken = async () => {
  if (!accessToken) {
    // Request a new access token if none exists
    await getSpotifyAccessToken(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET);
  }
  return accessToken;
};

export const getGenreSongsForEmotion = async (emotion) => {
  const happyMusicGenres = [
    "happy",
    "sad",
    "surprised",
    "disgusted",
    "neutral",
  ];
  var query = "";
  if (happyMusicGenres.includes(emotion)) {
    query = "happy chill";
  } else {
    query = "sad";
  }
  const token = await getAccessToken();

  let tracks = [];
  const maxTracks = 50;
  let offset = 0;

  while (tracks.length < maxTracks) {
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${query}&type=track&limit=50&offset=${offset}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    const newTracks = response.data.tracks.items;
    if (newTracks.length === 0) {
      break;
    }

    tracks = [...tracks, ...newTracks];
    offset += newTracks.length;
  }

  for (let i = tracks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tracks[i], tracks[j]] = [tracks[j], tracks[i]];
  }

  const randomTracks = tracks.slice(0, 5);

  return randomTracks;
};
