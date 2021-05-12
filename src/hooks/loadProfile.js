import React, { useState } from 'react';

export const loadProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  fetch('https://stay-rnb-server.herokuapp.com/')
    .then(res => {
      return res.json();
    })
};
