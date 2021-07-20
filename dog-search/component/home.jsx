import React, { useState, useEffect } from 'react';


export const Home = () => {

  const [breed, setBreed] = useState('');
  const [dogs, setDogs] = useState('');

  const inputSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted!yay')

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
              {dog}
            </p>
          )
        }));
        console.log(Array.isArray(dogs), 'key')
      })
  }

  return (
    <div className='body'>

      <form className='search-bar' onSubmit={inputSubmit}>
        <label>Search Dogs </label>
        <input type="text" placeholder='dog breed'
          value={breed}
          onChange={(e) => {
            setBreed(e.target.value)
          }}
        />
        <button className='search-button'>search</button>
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
