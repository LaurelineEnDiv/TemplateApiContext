import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/products">
            Produits
          </NavLink>
        </li>
        <li>
          <NavLink to="/products/produit-1">
            produit-1
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;