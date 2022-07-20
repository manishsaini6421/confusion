import "./App.css";
import Main from "./components/MainComponent";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { BrowserRouter } from "react-router-dom";


const store =ConfigureStore();
class App extends Component {


  render() {
    return (
      <Provider store={store}>
      <BrowserRouter basename="/confusion">
        <div>
          <Main />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
