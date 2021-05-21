import { StrictMode } from "react";
import ReactDOM from "react-dom";
//import * as ServiceWorker from './ServiceWorker'
import App from "./App";
import reducer, { initialState } from "./reducer";
import { DataLayer } from "./DataLayer";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </StrictMode>,
  rootElement
);

//ServiceWorker.unregister();
