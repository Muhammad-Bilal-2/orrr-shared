import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { ForgotPasswordModal } from "./component-lib/index";
// import { Login } from "./component-lib/index";
import { Login } from "./component-lib/index";

import "@orr/shared-style";

function App() {
  return (
    <>
      <h3 className="id">123</h3>
      <Login login={() => console.log("login")} />
      <ForgotPasswordModal />
    </>
  );
}

export default App;
