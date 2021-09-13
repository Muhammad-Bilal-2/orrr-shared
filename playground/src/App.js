import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useIsPhoneContext } from "./component-lib/index";
import {
  ModalOverlay,
  ModalNoHeaderOverlay,
  ModalSuccess,
  NativeOverlay,
} from "./component-lib/index";

import "@orr/shared-style";
// import "@orr/shared-style/src/index";

function App() {
  const isphone = useIsPhoneContext();

  return (
    <>
      <h3 className="id">123</h3>
      {/* <ModalNoHeaderOverlay
        // text="text"
        show={true}
        setShow={() => console.log("show")}
      >
        <p>just text</p>
      </ModalNoHeaderOverlay> */}
      <ModalOverlay
        header={"text"}
        show={true}
        setShow={() => console.log("show")}
      >
        <p>just text</p>
      </ModalOverlay>
    </>
  );
}

export default App;
