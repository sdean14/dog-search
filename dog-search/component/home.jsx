import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {

  const [breed, setBreed] = useState('');
  const [dogs, setDogs] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBreed('', breed);
  }

  const fetchDogList = () => {
    let ans = fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        let obj = Object.values(data)
        let dogs = Object.keys(obj[0])
        setDogs(dogs);
      })
  }

  const listOfDogs = () => {
    !dogs ? fetchDogList() :
      setDogs(
        dogs.filter((val) => {
          if (val.toLowerCase().includes(breed.toLowerCase())) {
            return val
          }
        })
      )
  }


  breed.length <= 0 ? fetchDogList() : ''
  return (
    <div className='body'>

      <form className='search-bar' onSubmit={handleSubmit}>
        <label className='search-dog-label'>Search Dogs </label>
        <input type="text" placeholder='dog breed'
          value={breed}
          onChange={(e) => { setBreed(e.target.value); listOfDogs() }}
        />
      </form>

      <div className="list-container">
        <div>List Of Dogs</div>
        <div className='all-dogs'>
          {dogs ? dogs.map((dog, idx) => {
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
          }) : 'No dogs yet'
          }
        </div>
      </div>
    </div>

  );
}
