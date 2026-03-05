import { useState, useEffect } from 'react';
import Cat from '../assets/cat.jpg'
import { FaFolder, FaPhone, FaUser } from 'react-icons/fa';

import Projects from './Proj';
import About from './Abt';
import Contact from './Contact';

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

const Home = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [showProject, setShowProject] = useState(false);
  const [showContact, setShowContact] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState(false);

  const API_key = import.meta.env.VITE_WEATHER_API_KEY;
  const city = "New York";
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    }, 1000 * 30);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`)
      .then(res => res.json())
      .then((data: WeatherData) => setWeather(data))
      .catch(err => console.error("Weather failed", err));
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${Cat})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex items-center justify-center ml-160 mt-2 bg-white/20 backdrop-blur-md w-40 h-10 rounded-xl">
            <h2 className="text-white font-medium">{time}</h2>
          </div>

          <div className="flex flex-col mt-11 gap-10 items-start jusity-start text-white/50 ">
            <div className="w-22 h-22 bg-white/40 rounded-xl ml-10"></div>
            <FaFolder
              onClick={() => setShowProject(true)}
              className="h-13 w-20 ml-11 -mt-28 hover:text-white/70"
            />
            <p className="text-white ml-13 -mt-2">Projects</p>
            <div className="w-22 h-22 bg-white/40 rounded-xl ml-10"></div>
            <FaPhone
              onClick={() => setShowContact(true)}
              className="h-13 w-20 ml-11 -mt-28  hover:text-white/70 "
            />
            <p className="text-white ml-13 -mt-2">Contact</p>
            <div className="w-22 h-22 bg-white/40 rounded-xl ml-10"></div>
            <FaUser
              onClick={() => setShowAbout(true)}
              className="h-12 w-20 ml-11 hover:text-white -mt-27"
            />
            <p className="text-white ml-13 -mt-2">About Me</p>
          </div>

          <div className="bg-white/20 backdrop-blur-md p-4 w-80 ml-140 -mt-80 rounded-2xl text-white/70">
            <h3 className="text-xl font-bold">{weather?.name}</h3>
            <p className="text-3xl">{weather?.main?.temp}°C</p>
            <p className="capitalize">{weather?.weather?.[0]?.description}</p>
          </div>
        </div>

        {showProject && <Projects onClose={() => setShowProject(false)} />}
        {showContact && <Contact onClose={() => setShowContact(false)} />}
        {showAbout && <About onClose={() => setShowAbout(false)} />}
      </div>
    </>
  );
};

export default Home;
