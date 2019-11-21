import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import regions from './../fixtures/regions.json';
import NavButton from './NavButton.js';

import style from './RegionList.module.css';

export default function RegionList({ history }) {
  console.log(regions.features.length);
  return (
    <div className={style.list}>
      {regions.features.map((feature, index) => (
        <Link to={`/regions/${index}`} key={index}>
          <span className="logo"></span>
          <span>{feature.properties.name}</span>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </Link>
      ))}
      <NavButton history={history} />
    </div>
  );
}
