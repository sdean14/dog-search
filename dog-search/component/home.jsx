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
        setDogs(dogs);
        console.log( Array.isArray(dogs), 'key')

        // return(
        //   <div> oooo
        //  {pups.map((ele,i)=>{
        //    <div>{ele}</div>
        //  })}
        //   </div>
        // )
      })
  }

  return (
    <div className='body'>

      <div>
        <form className='search-bar' onSubmit={inputSubmit}>
          <label>Dog Breed</label>
          <input type="text" placeholder='dog breed'
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value)
            }}
          />
          <button className='search-button'>search</button>
        </form>
        <label >list of dogs</label>
        <div className='list each-breed'>
          {dogs ? 
          // dogs.map((dog, idx) => {
            // <div key={idx}>
              dogs
            // </div>
          // }) 
          : listOfDogs()}
        </div>

      </div>

    </div>
  );
}