import './Nav.scss';
import { Link, NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="/" activeClassName="active" exact> Covid</NavLink>
            <NavLink to="/countdown" activeClassName="active"> Count Down</NavLink>
            <NavLink to="/todo" activeClassName="active"> Todo App</NavLink>
            <NavLink to="/blog" activeClassName="active"> Blog</NavLink>
            <NavLink to="/youtube" activeClassName="active"> Youtube Search</NavLink>
        </div>
    );
}
export default Nav;