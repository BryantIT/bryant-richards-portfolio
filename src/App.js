import React, { useState, useEffect } from 'react';
import Pages from './Pages';

function App() {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/bryantit')
      .then(res => res.json())
      .then(profile => {
        setProfile(profile);
      });
  }, []);

  if (!profile) {
    return <div />;
  }

  return <Pages profile={profile} />;
}

export default App;
