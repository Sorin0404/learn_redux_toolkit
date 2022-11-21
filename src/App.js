import { Provider } from "react-redux";

import Counter from "./Counter";
import store from "./reducers/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
