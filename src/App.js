import "./styles.css";
import Login from "./login";
import { useState, useEffect } from "react";
import { getTokenurl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./player";
import { useDataLayerValue } from "./DataLayer";
const spotify = new SpotifyWebApi();
export default function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenurl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });
      //setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user
        });
      });
      spotify.getUserPlaylists().then((playlists) =>
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      );
      spotify.getPlaylist(`30ANuN3YGWAeRpS3RMnCUz`).then((res) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: res
        });
      });
    }
    //console.log(token);
  }, []);
  //console.log(user);
  //console.log(token);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}
