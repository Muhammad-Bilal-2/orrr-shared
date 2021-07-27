import "./App.css";
import { CenteredSpinner } from "./component-lib/index";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <CenteredSpinner loading={true} size="md" loadingText="Authenticating..." />
  );
}

export default App;
