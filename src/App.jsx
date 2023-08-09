import "./App.css";
import appRouter from "./routes/Routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
