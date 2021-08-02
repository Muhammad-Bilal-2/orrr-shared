import "./App.css";
// import { CenteredSpinner } from "./component-lib/index";
import "bootstrap/dist/css/bootstrap.css";
import { useIsPhoneContext } from "./component-lib/index";
import { Login } from "./component-lib/index";

import "@orr/shared-style";
// import "@orr/shared-style/src/index";

function App() {
  const isphone = useIsPhoneContext();

  return (
    <>
      {/* <h3 className="id">123</h3>
      <CenteredSpinner
        loading={true}
        size="md"
        loadingText="Authenticating..."
      /> */}
      <Login />
    </>
  );
}

export default App;
