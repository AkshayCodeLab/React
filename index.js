import React from 'react';
import ReactDOM from 'react-dom/client';

// Functional Component:
const Title = () => <h1>This is the title of our webpage.</h1>;

const HeadingComponent = () => {
  const titles = [];

  for (let i = 0; i < 4; i++) {
    titles.push(<Title key={i} />);
  }

  return (
    <div>
      {titles}
      <h1>Hello React using functional component.</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);
