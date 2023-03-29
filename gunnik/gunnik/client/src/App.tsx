import { useEffect, useState } from "react";
import "./App.css";
import GUN, { IGunInstance } from "gun";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [text, setText] = useState<string>();
  const [gun, setGun] = useState<IGunInstance<any>>();

  useEffect(() => {
    setGun(GUN("http://147.230.237.85:8765/gun"));
    console.log("Starting server ...");
  }, []);

  useEffect(() => {
    if (gun !== undefined) {
      console.log("Registering event ...");
      gun.get('mark').on((data, key) => {
        setText(data.live);
      });
    }
  }, [gun]);

  const updateText = (event: any) => {
      setText(event.target.value);
      if (gun !== undefined) {
        gun.get('mark').get('live').put(event.target.value);
      }
  }

  return <div className="App">
      <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" value={text} onChange={updateText} aria-label="With textarea" />
      </InputGroup>
  </div>;
}

export default App;
