import React from "react";
import Card from "./Card";
import contact from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contact[2].name}
        src={contact[2].src}
        mobile={contact[2].mobile}
        email={contact[2].email}
      />
      <Card
        name={contact[1].name}
        src={contact[1].src}
        mobile={contact[1].mobile}
        email={contact[1].email}
      />
      <Card
        name={contact[0].name}
        src={contact[0].src}
        mobile={contact[0].mobile}
        email={contact[0].email}
      />
    </div>
  );
}

export default App;
