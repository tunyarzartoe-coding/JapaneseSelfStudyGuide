import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="main_sidebar">
      <ul className="sidebar__menu">
        <li>
          <NavLink exact to="/" activeClassName="active" className="sidebar__link">
            ホーム
          </NavLink>
        </li>
        <li>
          <NavLink to="/beginner" activeClassName="active" className="sidebar__link">
            初心者
          </NavLink>
        </li>
        <li>
          <NavLink to="/intermediate" activeClassName="active" className="sidebar__link">
            中級
          </NavLink>
        </li>
        <li>
          <NavLink to="/advanced" activeClassName="active" className="sidebar__link">
            上級
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
