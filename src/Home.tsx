import { useState } from "react";
import { Select, SelectOption } from "./components/ui/select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function Home() {
  const [value, setValue] = useState<SelectOption | undefined>(options[0]);
  return (
    <div>
      <Select options={options} value={value} onChange={(v) => setValue(v)} />
    </div>
  );
}
export default Home;
