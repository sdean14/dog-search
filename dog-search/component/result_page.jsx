import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Home } from './home';

export const Result = (props) => {
  console.log(props.location.state.dog, 'name')
  const [dogImgs, setDogImgs] = useState('');


  const fetchImg = () => {
    fetch(`https://dog.ceo/api/breed/${props.location.state.dog}/images/random/4`)
      .then(res => res.json())
      .then(data => {
        let arrs = Object.values(data);
        let imgs = Object.values(arrs[0]);
        console.log(imgs[0], 'data');
        setDogImgs(imgs.map((img, idx) => {
          return (
            <div key={idx}>
              <img src={img} alt="dog"></img>
            </div>
          )
        }))
      })
  }

  return (
    <div >

      <div className='list'>
        {props.location.state.dog ? props.location.state.dog : ''}
        {dogImgs ? dogImgs : fetchImg()}
      </div>

      <Link to='/'><button>Back</button></Link>

    </div>
  );
}

