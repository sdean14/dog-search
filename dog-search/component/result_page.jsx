import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Home } from './home';

export const Result = () => {

  return (
    <div>

      <div>
        <div>dog1</div>
        <div>dog2</div>
        <div>dog3</div>
        <div>dog4</div>
      </div>
      
      <Link to='/'><button>Back</button></Link>

    </div>
  );
}

