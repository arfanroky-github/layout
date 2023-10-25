import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import ChatLayout from "./chats";
import Home from "./Home";

type Component = {
  path: string;
  element: JSX.Element;
};

const App = () => {
  const components: Component[] = [{ path: "chats", element: <ChatLayout /> }];

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {components.map((component) => (
            <Route
              key={component.path}
              path={component.path}
              element={component.element}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};
export default App;
