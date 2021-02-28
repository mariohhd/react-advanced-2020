import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/mariohhd';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');


  useEffect(() => {
    fetch(url)
    .then((response)=> {
      if(response.status >= 200 && response.status <= 299) 
        return response.json();
      else {
        setIsLoading(false);
        throw new Error(response.statusText);
      }
    })
    .then((user) => {
      setIsLoading(false);
      setIsError(false);
      setUser(user);
    })
    .catch(error => setIsError(true));
  }, [])

  if(isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }

  if(isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    )
  }
  const { avatar_url, login, html_url } = user;
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <div>
        <h4>{login}</h4>
        <a href={html_url}>profile</a>
      </div>
    </div>
  )
};

export default MultipleReturns;
