import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faMapMarked } from '@fortawesome/free-solid-svg-icons';

import style from './NavButton.module.css';

export default function NavButton({ history }) {
  return (
    <div className={style.buttons}>
      <button onClick={() => history.push('/')}>
        <FontAwesomeIcon icon={faMapMarked} />
      </button>
      <button onClick={() => history.push('/regions')}>
        <FontAwesomeIcon icon={faListUl} />
      </button>
    </div>
  );
}
