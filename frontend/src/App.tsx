import "./App.css";
import MainScreen from "./components/MainScreen";
import { AppContextProvider } from "./AppContextProvider";

function App() {

  return (
    <>
    <AppContextProvider>
      <MainScreen></MainScreen>
    </AppContextProvider>
    </>
  );
}

export default App;
