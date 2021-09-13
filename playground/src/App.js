import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { PasswordInput, useIsPhoneContext } from "./component-lib/index";
import { Login } from "./component-lib/index";

import "@orr/shared-style";
// import "@orr/shared-style/src/index";

function App() {
  const isphone = useIsPhoneContext();

  return (
    <>
      {/* <h3 className="id">123</h3>  */}
      <PasswordInput
        label="New Password"
        placeholder="New Password"
        onChange={() => console.log("hi")}
        value="value"
        name="password"
      />
    </>
  );
}

export default App;
