import React, { useEffect, useState } from "react";

const LoginForm = () => {
  const data = {
    name: "",
    email: "",
    password: ""
  };

  const [inputData, setInputData] = useState(data);

  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All field are mandetory");
    } else {
      setFlag(true);
    }
  };
  return (
    <>
      <pre>
        {flag ? (
          <h2 className="ui-define">
            Hello {inputData.name}, You've Registered Successfully
          </h2>
        ) : (
          ""
        )}
      </pre>

      <div>
        <h1>Registration Form</h1>
      </div>

      <div onSubmit={handleSubmit}>
        <form className="container">
          <div className="input-name">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={inputData.name}
              onChange={handleData}
            ></input>
          </div>

          <div className="input-email">
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={inputData.email}
              onChange={handleData}
            ></input>
          </div>

          <div className="input-password">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={inputData.password}
              onChange={handleData}
            ></input>
          </div>

          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
