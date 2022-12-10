import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../../Routes/Home";
import {
  useContextGlobal,
  ContextGlobal,
} from "../../Components/utils/global.context";
import { useContext } from "react";
describe("Home test", () => {
  test("Home mounts properly", () => {
    const { providerValue } = useContextGlobal();
    const { dentists, stateTheme } = providerValue;
    const homeRender = render(<Home />);
    screen.debug();
    expect(homeRender).toBeTruthy();
    const result = screen.getByText("Home");
    expect(result).toBeTruthy();
    /* 
    
 FAIL  src/tests/Routes/Home.test.jsx > Home test > Home mounts properly
TypeError: Cannot read properties of null (reading 'useContext')
 ❯ Proxy.useContext node_modules/react/cjs/react.development.js:1618:21
 ❯ Module.useContextGlobal src/Components/utils/global.context.jsx:78:10
     76| 
     77| export const useContextGlobal = () => {
     78|   return useContext(ContextGlobal);
       |          ^
     79| };
     80| 
    */
  });
});
