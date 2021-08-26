import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./hooks/useAuth";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
