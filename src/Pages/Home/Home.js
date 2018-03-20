import React from 'react';
import Routes from './../../Config/Routes.json';
import Contents from './../../Components/Contents/Contents';
import Description from './../../Components/Description/Description';

function Home() {
  return (
    <div>
      <Description header="Exercise" />
      <Contents routes={Routes.exercises} />

      <Description header="Tutorials" />
      <Contents routes={Routes.tutorials} />
    </div>
  );
}

export default Home;
