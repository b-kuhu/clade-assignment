import { PiSuitcase, PiHandCoins } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { FaRegBell, FaAngleDown, FaAtlassian } from "react-icons/fa";

const Header = () => {
  return (
    <header>
    <div className="heading">
      <button className="btn_logo">Logo</button>
      <div className="nav_wrapper_one">
        <button className="btn_jobs">
          <PiSuitcase className="icon" /> Jobs
        </button>
        <div className="nav_wrapper_options">
          <button>
            <FiMessageSquare className="icon" /> Messages
          </button>
          <button>
            <PiHandCoins className="icon" />
            Payments
          </button>
          <button>
            <GoPeople className="icon" />
            Application
          </button>
        </div>
      </div>
      <div className="nav_wrapper_two">
        <FaRegBell className="icon" />
        <FaAtlassian className="atlassian_icon" />
        <FaAngleDown className="icon" />
      </div>
    </div>
    <hr />
    </header>
  );
};

export default Header;
