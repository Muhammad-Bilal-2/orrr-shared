import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { ForgotPasswordModal, useIsPhoneContext } from "./component-lib/index";
// import { Login } from "./component-lib/index";
import { getDate } from "./component-lib/index";
import { LoginForm, Login } from "./component-lib/index";

import "@orr/shared-style";
// import "@orr/shared-style/src/index";

function App() {
  // const isphone = useIsPhoneContext();

  return (
    <>
      <h3 className="id">123</h3>
      {/* <LoginForm></LoginForm> */}
      <Login login={() => console.log("login")} />
      <ForgotPasswordModal />
    </>
  );
}

export default App;
