import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);

      } catch (error) {
        setIsError(true);
        console.log(error);
      }

      setIsLoading(false);

    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>
  };

  if (isError) {
    return <h2>There was an error</h2>
  };

  return <div>
    <img style={{ width: '150px', borderRadius: '25px' }} src={user.avatar_url} alt={user.name} />
    <h2>{user.name}</h2>
    <h4>Works at {user.company}</h4>
    <p>{user.bio}</p>

  </div>
};
export default MultipleReturnsFetchData;

// const {avatar_url, name, bio, company_name }= user;
// remember when you are destructuring, you need to do it below the loading. JS will complain, you can't do it before 
// it reads the user = null. We need to bypass these conditions and pass the error, we have user
// read properties out of the object not null. 
