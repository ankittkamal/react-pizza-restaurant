import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Pizza Resturant Co.</Link>
      <SearchOrder />
      <p>Ankit</p>
    </header>
  );
}

export default Header;
