import { AppContext } from "./AppContext";
import Component2 from "./Component2";

function Component1() {
  return (
    <AppContext.Provider
      value={{ a:1, b:2, c:3, d:4, e:5, f:6 }}
    >
      <Component2 />
    </AppContext.Provider>
  );
}
export default Component1;
