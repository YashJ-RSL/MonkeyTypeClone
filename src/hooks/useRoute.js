import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/appLayout";
import Results from "../components/results";

const useRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/results",
    element: <Results />,
  },
]);

export default useRoute;
