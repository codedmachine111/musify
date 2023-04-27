import axios from "axios";
import { Buffer } from "buffer";

const SPOTIFY_CLIENT_ID = "230fac4104c4462280da56bb88bed015";
const SPOTIFY_CLIENT_SECRET = "0f6566c81ad642399610d7c32ee46401";

const getSpotifyAccessToken = async (client_id, client_secret) => {
  var accessToken = "";

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
    });

  return accessToken;
};

export const getGenreSongsForEmotion = async (emotion) => {
  // const token = await getSpotifyAccessToken(
  //   SPOTIFY_CLIENT_ID,
  //   SPOTIFY_CLIENT_SECRET
  // );
  // console.log(token);

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
  const token ="BQCUpCmkP0pw35z13Qe1FrVInAs2sQ20YFf9EOvlhDs5V4oayg9svRQjR05-_b8GKfKTmYaggkfH2ZdcQ-UWKO6pSTprkfQZDLKYNhUpXh7BYRZfS-U3";
  var track = null;
  await axios
    .get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=20`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      // Extract the tracks from the response
      const tracks = res.data.tracks.items;

      // Pick a random track from the list
      const randomIndex = Math.floor(Math.random() * tracks.length);
      track = tracks[randomIndex];
    });

    return track;
};
