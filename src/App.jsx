import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakeDataFetch = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Limpiar el timeout cuando el componente se desmonte
    return () => clearTimeout(fakeDataFetch);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
