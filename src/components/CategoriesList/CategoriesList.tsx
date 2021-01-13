import React  from 'react';
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'

import Button from '../../shared/Button/Button';

import './CategoriesList.style.scss';

const CategoriesList: React.FC = () => {
  return (
    <section className="app-categories-list">
      <Link to={ `${ROUTES.JOKE}/olanenem` }>
        <Button label={'teste'} />
      </Link>
    </section>
  );
};

export default CategoriesList;
