import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">Home</a>
      </Link>
      <a className="item">Gods</a>
      <Link route="/">
        <a className="item">Genesis Bulls</a>
      </Link>
      <Link route="/teens">
        <a className="item">Teens</a>
      </Link>
      <a className="item">Wallets</a>
    </Menu>
  );
};

export default Header;
