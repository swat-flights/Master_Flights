import React from 'react';
import FilterMenu from './FilterMenu';
import './styles/CollapsibleMenu.sass';

const CollapsibleMenu = ({ status, changeStatus }) => (
  <div
    className={
      status === 'active' ? 'collapsibleMenu' : 'collapsibleMenu__inactive'
    }
  >
    <div className="collapsibleMenu__content">
      <FilterMenu closeBtn={changeStatus} />
    </div>
  </div>
);

export default CollapsibleMenu;
