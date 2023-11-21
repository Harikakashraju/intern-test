
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUserProfile(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {userProfile && (
        <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden flex">
          <img
            className="w-1/2 h-48 object-cover object-center"
            src={userProfile.picture.large}
            alt="User"
          />
          <div className="p-6 w-1/2">
            <h2 className="text-xl font-semibold text-gray-800">
              {`${userProfile.name.first} ${userProfile.name.last}`}
            </h2>
            <p className="text-gray-600 mt-2">Gender: {userProfile.gender}</p>
            <div className="flex items-center mt-4">
              <p className="text-gray-600">{userProfile.phone}</p>
            </div>
            <p className="text-gray-600 mt-2">{userProfile.email}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;


