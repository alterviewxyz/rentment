import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaSignInAlt } from "react-icons/fa";
import Button from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          backgroundColor: "#AAA",
          padding: "20px",
        }}
      >
        <Button
          text="متن دکمه"
          color="primary"
          variant="solid"
          icon={<FaSignInAlt />}
        />
        <Button
          text="متن دکمه"
          color="primary"
          variant="outline"
          icon={<FaSignInAlt />}
        />
        <Button
          text="متن دکمه"
          color="primary"
          variant="text"
          icon={<FaSignInAlt />}
        />

        <Button
          text="متن دکمه"
          color="secondary"
          variant="solid"
          icon={<FaSignInAlt />}
        />
        <Button
          text="متن دکمه"
          color="secondary"
          variant="outline"
          icon={<FaSignInAlt />}
        />
        <Button
          text="متن دکمه"
          color="secondary"
          variant="text"
          icon={<FaSignInAlt />}
        />

        <Button
          text="متن دکمه"
          color="black"
          variant="solid"
          icon={<FaSignInAlt />}
        />
        <Button
          text="متن دکمه"
          color="black"
          variant="outline"
          icon={<FaSignInAlt />}
        />
        <Button
          text="متن دکمه"
          color="black"
          variant="text"
          icon={<FaSignInAlt />}
        />

        <Button
          text="متن دکمه"
          color="white"
          variant="solid"
          icon={<FaSignInAlt />}
        />
        <Button
          text="متن دکمه"
          color="white"
          variant="outline"
          icon={<FaSignInAlt />}
        />
        <Button
          text="متن دکمه"
          color="white"
          variant="text"
          icon={<FaSignInAlt />}
        />

        <Button
          text="متن دکمه"
          disabled={true}
          color="primary"
          variant="solid"
          icon={<FaSignInAlt />}
        />
        <Button
          text="متن دکمه"
          disabled={true}
          color="primary"
          variant="outline"
          icon={<FaSignInAlt />}
        />
        <Button
          text="متن دکمه"
          disabled={true}
          color="primary"
          variant="text"
          icon={<FaSignInAlt />}
        />
      </div>
    </>
  );
}

export default App;
