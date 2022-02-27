import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./appRoutes";
import store from "./ic-redux/store";
function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
      </Provider>
  );
}

export default App;
