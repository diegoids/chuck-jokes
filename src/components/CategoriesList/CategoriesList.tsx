import React  from 'react';
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'

import Button from '../../shared/Button/Button';

import './CategoriesList.style.scss';

const MOCK = [
  {
    name: 'Botao 1',
    rota: 'ticaracatica'
  },
  {
    name: 'Botao 2',
    rota: 'ticaracatica'
  },
  {
    name: 'Botao 3',
    rota: 'ticaracatica'
  },
  {
    name: 'Botao 4',
    rota: 'ticaracatica'
  },
  {
    name: 'Botao 5',
    rota: 'ticaracatica'
  },
  {
    name: 'Botao 6',
    rota: 'ticaracatica'
  }
]

const CategoriesList: React.FC = () => {
  return (
    <section className="app-categories-list">
      {
        MOCK.map((i, idx) => (
          <Link key={idx} to={ `${ROUTES.JOKE}/${i.rota}` }>
            <Button label={ i.name } />
          </Link>
        ))
      }
    </section>
  );
};

export default CategoriesList;
