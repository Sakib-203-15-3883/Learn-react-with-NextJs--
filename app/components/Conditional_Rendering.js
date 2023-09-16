// Example 1: Conditional Rendering of an Element
import React from "react";

export function App() {
  const isLogin = false;

  return (
    <div>{isLogin ? <p>Welcome to Home page </p> : <p>Please login </p>}</div>
  );
}

// Example 2: Conditional Rendering of Component

import React from 'react';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';

function App() {
  const isAdmin = true;

  return (
    <div>
      {isAdmin ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
}




// Example 3: Conditional Rendering of Styles

import React from 'react';

function App() {
  const isHighlighted = true;

  return (
    <div>
      <p style={{ color: isHighlighted ? 'blue' : 'black' }}>
        This text is {isHighlighted ? 'highlighted' : 'not highlighted'}.
      </p>
    </div>
  );
}




// Example 4: Conditional Rendering of Lists



function App() {
  const showList = true;
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      {showList ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items to display.</p>
      )}
    </div>
  );
}


// Example 5: Conditional Rendering with Function Calls

import React from 'react';

function App() {
  const isMorning = true;

  const greet = () => {
    return isMorning ? 'Good morning!' : 'Hello!';
  };

  return (
    <div>
      <p>{greet()}</p>
    </div>
  );
}


