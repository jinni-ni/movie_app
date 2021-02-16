import React from "react";

function Food({ name }) {
  console.log(name);
  return <h1>I like {name}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Food name="kimch" />
      <Food name="bab" />
      <Food name="potato" />
      <Food name="apple" />
    </div>
  );
}

export default App;
