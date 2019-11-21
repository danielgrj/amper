import React, { useContext } from 'react';
import { Context } from './../context';

import style from './Header.module.css';

export default function Header() {
  // const { date } = useContext(Context);
  return (
    <div className={style.container}>
      <div className={style.branding}>
        <div className={style.logo}>
          <img src="./logo.jpg" alt="Annnnper" />
        </div>
        <div className={style.menu}>
          <button>Menú</button>
        </div>
      </div>
      <nav className={style.navbar}>
        <div className={style.active}>PML</div>
        <div>Demanda</div>
      </nav>
      <div className={style.info}>
        <h3>Gerencias de control</h3>
        {/* <span>{date}</span> */}
      </div>
    </div>
  );
}
