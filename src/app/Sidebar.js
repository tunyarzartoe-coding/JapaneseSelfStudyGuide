import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className=" main_sidebar">
      <ul className="sidebar__menu">
        <li>
          <Link to="/" >ホーム</Link>
        </li>
        <li>
          <Link to="/beginner" >初心者</Link>
        </li>
        <li>
          <Link to="/intermediate" >中級</Link>
        </li>
        <li>
          <Link to="/advanced" >上級</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
