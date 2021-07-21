import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Home } from './home';

export const Result = (props) => {
console.log(props.location.state.dog)

  return (
    <div >

      <div className='list'>
        {props.location.state.dog ? props.location.state.dog: ''}
        <div>dog1</div>
        <div>dog2</div>
        <div>dog3</div>
        <div>dog4</div>
      </div>
      
      <Link to='/'><button>Back</button></Link>

    </div>
  );
}

