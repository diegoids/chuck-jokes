import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

import Button from '../../shared/Button/Button';

import './CategoriesList.style.scss';

interface Props {
  categories: string[]
}

const CategoriesList: React.FC<Props> = ({ categories }) => {
  return (
    <section className="app-categories-list">
      { categories.map( (category, idx) => (
        <Link key={ idx } to={ `${ROUTES.JOKE}/${category}` }>
          <Button label={ category } />
        </Link>
      ) ) }
    </section>
  );
};

export default CategoriesList;
