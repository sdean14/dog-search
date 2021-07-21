import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Result } from './result_page';

export const Home = () => {

  const [breed, setBreed] = useState('');
  const [dogs, setDogs] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBreed('', breed);
  }

  const listOfDogs = () => {
    let ans = fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        let obj = Object.values(data)
        let dogs = Object.keys(obj[0])
        setDogs(dogs.map((dog, idx) => {
          return (
            <p className='each-breed' key={idx}>
              <Link to={{
                pathname: '/result',
                state: { dog: dog }
              }} >
                {dog}
              </Link>
            </p>
          )
        }));
      })
  }

  return (
    <div className='body'>

      <form className='search-bar' onSubmit={handleSubmit}>
        <label>Search Dogs </label>
        <input type="text" placeholder='dog breed'
          value={breed}
          onChange={(e) => { setBreed(e.target.value) }}
        />
        <Link to='/result'><button className='search-button'>WOFF</button> </Link>
      </form>

      <div className="list-container">
        <div>List Of Dogs</div>
        <div className='all-dogs'>
          {dogs ? dogs : listOfDogs()}
        </div>
      </div>

    </div>

  );
}
