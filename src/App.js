import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="source">
          <div className="weather-app">
            <div className="row">
              <div className="col-6">
                <h1>London</h1>
                <ul>
                  <li>
                    <span id="day"> Tuesday</span> <span id="hours"> </span>:
                    <span id="minutes"></span>,{" "}
                    <span id="description"> clear sky</span>
                  </li>
                  <li>
                    Humidity: <span id="humidity"> </span>%, Wind:{" "}
                    <span id="wind"> </span>km/h
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <div className="clearfix weath-temp">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="cloud"
                    className="left sunny"
                    id="icon"
                  />
                  <strong className="temp left" id="temper">
                    {" "}
                    18
                  </strong>
                  <span className="left cels"> ºC </span>
                </div>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-9">
                <form id="form" />
                <input
                  type="search"
                  placeholder="Type a city"
                  className="form-control w-1oo"
                  id="input"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>

            <hr />
            <div className="weather-forecast" id="forecast">
              <div className="row">
                <div className="col-2 blabla">
                  <div className="forecast-date">Monday</div>
                  <img
                    className="image"
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt=""
                  />
                  <div className="forecast-temp">
                    <span className="forecast-max"></span>
                    <span className="forecast-min"> </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <small>
            {" "}
            <a href="https://github.com/Killiana/weather-finally-app">
              {" "}
              Open-source code
            </a>{" "}
            by Iliyana Boneva{" "}
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
