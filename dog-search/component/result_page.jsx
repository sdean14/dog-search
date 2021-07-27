import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Result = (props) => {

  const [dogImgs, setDogImgs] = useState('');

  const fetchImg = () => {
    fetch(`https://dog.ceo/api/breed/${props.location.state.dog}/images/random/4`)
      .then(res => res.json())
      .then(data => {
        let arrs = Object.values(data);
        let imgs = Object.values(arrs[0]);
        setDogImgs(imgs.map((img, idx) => {
          return (
            <div key={idx}>
              <img className='each-img' src={img} alt="dog"></img>
            </div>
          )
        }))
      })
  }

  return (
    <div className='body'>

      <div className="top-container">
        <p className='name-of-breed'>{props.location.state.dog ? props.location.state.dog : ''}</p>
        <Link to='/'><button className='back-btn'>Back</button></Link>
      </div>
      <div className="list-container img-con">{dogImgs ? dogImgs : fetchImg()}</div>

    </div>
  );
}

