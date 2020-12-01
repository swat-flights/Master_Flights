import React from 'react';
import { Link } from 'react-router-dom';
import './styles/AdminSidebarButton.sass';

const AdminSidebarButton = ({ icon, action, route }) => {
  // let color;
  // const changeColor = () => {
  //   if (route !== window.location.pathname){
  //     color = "none"
  //   }
  //   return true
  // }

  // const [color, changeColor] = useState("transparent")

  return (
    <button type="button" className="Sidebar__button">
      <Link to={route}>
        <i className="material-icons">{icon}</i>
        <p>{action}</p>
      </Link>
    </button>
  );
};

export default AdminSidebarButton;
