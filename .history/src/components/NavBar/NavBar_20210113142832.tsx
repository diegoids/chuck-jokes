import React  from 'react';
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'

import Button from '../../shared/Button/Button';

import './NavBar.style.scss';

interface Props {
  category: string
}

const CategoriesList: React.FC<Props> = ({ category }) => {
  return (
    <nav className="app-nav-bar">
      <Link to={ ROUTES.HOME }>
        <Button label={'Categories'} layout={'back'} />
      </Link>

      <h1 className="app-nav-bar__category">
        { category }
      </h1>
    </nav>
  );
};

export default CategoriesList;
