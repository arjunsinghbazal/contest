import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      axios.get(`https://dummyjson.com/users/${user.id}`)
        .then((res) => {
          setUserData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  return (
    <div className='form'>
      <h2>Profile</h2>
      {userData ? (
        <div>
          <p><strong>Username: </strong>{userData.username}</p>
          <p><strong>Email: </strong>{userData.email}</p>
         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
