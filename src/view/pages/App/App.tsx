import React, { useEffect } from 'react';
import CardItem from '../../component/CardItem/CardItem';
import MenuSearch from '../../component/MenuSearch/MenuSearch';
import WeatherService from '../../../services/Weather.service';
import './App.css';

function App() {
  useEffect(() => {
    WeatherService.getWeather('','');
  }, []);
  return (
    <div className="window">
      <div className="window__header">
          <div className="window__header--buttons">
              <div className="window__header--button"></div>
              <div className="window__header--button"></div>
              <div className="window__header--button"></div>
          </div>
      </div>
      <div className="window__body">
          <MenuSearch/>
          <div className="card card--custom card--full card--results">
            <div className="card__header">
              <div className="result result__details">
                  <div className="result__city">New York</div>
                  <div className="result__temperature">41°</div>
              </div>
              <div className="result result__infos">
                  <div className="result__icon">
                      <img src="http://openweathermap.org/img/wn/10d@4x.png" />
                  </div>
                  <div className="result__label">Broken clouds</div>
              </div>
            </div>
            <div className="card__body">
              <CardItem/>
              <CardItem/>
              <CardItem/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
