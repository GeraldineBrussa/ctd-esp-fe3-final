import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../../Routes/Home";
import { useContextGlobal } from "../../Components/utils/global.context";
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
    TypeError: Cannot destructure property 'providerValue' of 'useContextGlobal(...)' as it is undefined.
 ❯ Home src/Routes/Home.jsx:8:11
      6| 
      7| const Home = () => {
      8|   const { providerValue } = useContextGlobal();
       |           ^
      9|   const { dentists, stateTheme } = providerValue;
     10|   //className={stateTheme.theme}
    
    */
  });
});
