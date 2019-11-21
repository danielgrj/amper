import React, { useEffect, useState } from 'react';
import AMMPER_SERVICE from './../services/ammper';

import style from './NodeDetail.module.css';

export default function NodeDetail({ match }) {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data: nodes } = await AMMPER_SERVICE.getDetails();
        setData(nodes.data.find(node => node.dNodeId == match.params.id));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div className={style.container}>
      <div>{data.updatedAt}</div>
      <div>Máximo: {data.maxValue} $/MWh</div>
      <div>Mínimo: {data.minValue} $/MWh</div>
      <div>Promedio: {data.promValue} $/MWh</div>
    </div>
  );
}
