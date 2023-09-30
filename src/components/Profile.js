import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";



const Profile = () => {
    const { user, isAuthenticated, isLoading} = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);
    var hasGold = false;
    
    if(isLoading) {
      return(
        <div> 
          Loading...
        </div>
      )
    }
    if(!isLoading && !isAuthenticated) {
      <div>
        Authentication Error
      </div>
    }
    return (
      isAuthenticated && (
        <div>
          <img src={user.picture}/>
          <h3>{user.name}</h3>
        </div>
      )
    );
  };
  
  export default Profile;