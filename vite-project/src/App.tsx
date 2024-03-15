import "./App.css";
import Heading from "./Components/Heading";
import Section from "./Components/Section";
import Counter from "./Components/Counter";
import List from "./Components/List";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <Heading title={"Title"} />
      <Section title={"Different title"}>Section</Section>
      <Counter setCount={setCount}>Count: {count}</Counter>
      <List listHead={"List"}
        items={[
          "😴Sleep",
          "😄Grin",
          "😃Wow",
          "⛔Stop",
          "🎠Horse",
          "🚓Police",
          "🚇Tram",
        ]}
        render={(item: string) => <span className="chartreuse">{item}</span>}
      />
    </>
  );
}

export default App;
