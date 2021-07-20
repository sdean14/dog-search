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
        // dogs = dogs.join(' ')
        setDogs(dogs);
        // console.log(typeof dogs, 'key')   
         
          // return(
          //   <div> oooo
          //  {pups.map((ele,i)=>{
          //    <div>{ele}</div>
          //  })}
          //   </div>
          // )
      })
  }

  const bana = () => {
    return(
      <div>bana TEST</div>
    )
  }

  return (
    <div>

      <div>
        <form onSubmit={inputSubmit}>
          <label>Dog Breed</label>
          <input type="text" placeholder='dog breed'
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value)
            }}
          />
        </form>

        <h2>Im body</h2> 
        <div>list below...someday</div>
        {/* {listOfDogs()} ------ */}
        {bana()}
        
      </div>{dogs}

    </div>
  );
}
