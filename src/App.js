import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import Planet from './components/Planet';
import People from './components/People';


function App() {

  const [planets, setPlanets] = useState([]);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?page=1&format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

  
    //function calling
    fetchPeople();
    fetchPlanets();

  }, []);


  return (
    <>

      <Router>
        <Navbar />
        <Container>
          {/* conditional rendering. if page load then 'loading' otherwise 'routes and route' */}
          {
            loading ? (
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
            ) : (
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/planets' element={<Planet data={planets}></Planet>} />
                <Route exact path='/people' element={<People data={people} />} />
              </Routes>
            )
          }
        </Container>
      </Router>

    </>
  );
}

export default App;
