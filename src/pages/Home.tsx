import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import WizardLogo from './WizardLogo.png';
import skyBackground from './sky.jpg';
import cloud1 from './Clouds/cloud1.png';
import cloud2 from './Clouds/cloud2.png';
import cloud3 from './Clouds/cloud3.png';
import cloud4 from './Clouds/cloud4.png';
import cloud5 from './Clouds/cloud5.png';



const Home: React.FC = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (city === "Tel Aviv") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=32.090&lon=34.774&appid=5efc2b39a8e5fe8d9bb06b8c8e3542be`)
        .then(response => response.json())
        .then(data => setWeatherData(data));
    }
    if (city === "Paris") {
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=48.85&lon=2.34&appid=5efc2b39a8e5fe8d9bb06b8c8e3542be`)
            .then(response => response.json())
            .then(data => setWeatherData(data));
        }
    if (city === "London") {
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=51.508&lon=-0.128&appid=5efc2b39a8e5fe8d9bb06b8c8e3542be`)
            .then(response => response.json())
            .then(data => setWeatherData(data));
        }
    if (city === "Sydney") {
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-33.866&lon=151.206&appid=5efc2b39a8e5fe8d9bb06b8c8e3542be`)
            .then(response => response.json())
            .then(data => setWeatherData(data));
        }
  }, [city]);

  return (
        <IonPage>
          <IonHeader>

          </IonHeader>
         <IonContent fullscreen style={{
           '--ion-background-color': 'transparent',
           backgroundImage: `url(${skyBackground})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center'
        }}>
        <div className="clouds">
          <img className="cloud1" src={cloud1} alt="cloud1" />
          <img className="cloud2" src={cloud2} alt="cloud2" />
          <img className="cloud3" src={cloud3} alt="cloud3" />
          <img className="cloud4" src={cloud4} alt="cloud4" />
          <img className="cloud5" src={cloud5} alt="cloud5" />
        </div>
        <div className="rights">© bar efrima</div>
        <div className="content-on-top">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">WeatherWizard</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer />
             <div className="logo-container">
             <img src={WizardLogo} alt="Wizard Logo" className="wizard-logo" />
            </div>
            <div className="select-container">
              <div className="center-label">
                <IonSelect
                  onIonChange={e => setCity(e.detail.value)}
                  className="citySelect"
                  placeholder="Select City"
                >
                  <IonSelectOption value="Tel Aviv">Tel Aviv</IonSelectOption>
                  <IonSelectOption value="Paris">Paris</IonSelectOption>
                  <IonSelectOption value="London">London</IonSelectOption>
                  <IonSelectOption value="Sydney">Sydney</IonSelectOption>
                </IonSelect>
              </div>
            </div>
          {weatherData && (
            <div className="weatherData">
              <h2>{weatherData.name}</h2>
              <h3 className="temp">{Math.round(weatherData.main.temp - 273.15)}°</h3>
              <p>Feels Like: {Math.round(weatherData.main.feels_like - 273.15)}°</p>
              <h1>{weatherData.weather[0].description}</h1>
              <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>

            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
