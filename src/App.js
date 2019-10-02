import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import { Route } from 'react-router-dom'
import DogBreedImages from './components/DogBreedImages'


function App() {
  return (
    <div className="App">
      <main>
      <Route path="/dog-breeds/:breed" component={DogBreedImages} />
      </main>
      <header className="App-header">
      <Route  path="/" component={DogsListContainer} />
       
      </header>
    </div>
  );
}

export default App;
