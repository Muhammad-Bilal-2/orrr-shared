import "./App.css";
import { CenteredSpinner } from "./component-lib/index";
import "bootstrap/dist/css/bootstrap.css";
import { useIsPhoneContext } from "./component-lib/index";

// import "@orr/shared-style";
// import "@orr/shared-style/src/index";
function App() {
  const isphone = useIsPhoneContext();
  console.log("isphone", isphone);
  return (
    <div>
      <h3 className="id">123</h3>
      <CenteredSpinner
        loading={true}
        size="md"
        loadingText="Authenticating..."
      />
    </div>
  );
}

export default App;
