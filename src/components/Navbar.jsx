import { NavLink } from "react-router-dom";
import Homepage from "./Homepage";
import Wines from "./Wines";
import Producers from "./Producers";
import Countries from "./Countries";
import Logo from "../assets/logo.png";

export default () => {
  return (
    <nav>
      <div className="container-large">
        <div className="nav-component">
          <div className="nav-left">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="nav-right">
            <menu>
              <NavLink className={"navlink"} to={"/"} element={<Homepage />}>
                Home
              </NavLink>
              <NavLink className={"navlink"} to={"/wines"} element={<Wines />}>
                Wines
              </NavLink>
              <NavLink
                className={"navlink"}
                to={"/producers"}
                element={<Producers />}
              >
                Producers
              </NavLink>
              <NavLink
                className={"navlink"}
                to={"/countries"}
                element={<Countries />}
              >
                Countries
              </NavLink>
            </menu>
          </div>
        </div>
      </div>
    </nav>
  );
};
