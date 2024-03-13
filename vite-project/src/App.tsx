import "./App.css"
import Heading from "./Components/Heading";
import Section from "./Components/Section";
import Counter from "./Components/Counter";
import { useState } from "react";


function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title={"Hello"} />
      <Section title={"Different title"}>This is my section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
    </>
  );
}

export default App;
