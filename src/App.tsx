import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./appRoutes";
import store from "./ic-redux/store";
function App() {
  return (
      <Provider store={store}>
          <HashRouter>
            <AppRoutes />
          </HashRouter>
      </Provider>
  );
}

export default App;
