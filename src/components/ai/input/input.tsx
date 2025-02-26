import React, { useEffect, useState } from "react";
import "./input.css";
import axios from "axios"

const Input = () => {
  const [data, setData] = useState(null);

useEffect(() => {
  axios.get("http://127.0.0.1:5000/testing")
    .then((response) => {
      console.log("response.data: ", response.data);
      setData(response.data);
      // Note: "data" won't reflect the update immediately here
    })
    .catch((error) => {
      console.log("ERROR: Could not obtain backend Data");
    });
}, []);

  
  // useEffect(() => {
  //   axios.get("http://127.0.0.1:5000/testing").then((response) => {
  //     console.log("respoinse.data: ", response.data)
  //     setData(response.data)
  //     console.log("data: ", data)
  //   })
  //   .catch((error) => {
  //       console.log("ERROR: Could not obtain backend Data")
  //     });
  // }, [])
  //

  return (
    // This will be the header component with the buttons to enable or disable specfic ai
    <section id="rootInput">
      {/* Input Prompt */}
      <div id="input">
        <input type="text" placeholder="Enter prompt..." />
      </div>

      {/* Select ai */}
      <div id="selectable">
        {/* Give list of selectable AI */}
        <p>put the list of img elements here</p>
      </div>

      {/* History */}
      <div id="history">
        {/* Give list of past Prompts */}
        <p>put the list of text history elements here</p>
        <p>Flask Testing</p>
        <div>
        {
            data ? (
        <div>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Type:</strong> {data.type}</p>
          <p><strong>Status:</strong> {data.status}</p>
        </div>
            ) : (<p>Loading Data...</p>)
          }</div>
      </div>
    </section>
  );
};

export default Input;
