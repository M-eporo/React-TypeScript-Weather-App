import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>React TypeScript Weather App</h1>
      <ul>
        <Link to="/">
          <li>TOP</li>
        </Link>
        <Link to="/forecast">
          <li>天気予報</li>
        </Link>
        <Link to="/info-disaster">
          <li>災害情報</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;