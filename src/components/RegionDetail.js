import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AMMPER_SERVICE from './../services/ammper';

export default function RegionDetail({ match }) {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data: nodes } = await AMMPER_SERVICE.getNodes();
        console.log(match.params.id);
        setNodes(nodes.data.filter(node => node.regionId === parseInt(match.params.id, 10) + 1));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div>
      {nodes.map(node => (
        <div key={node.id}>
          <Link to={`/node/${node.id}`}>{node.title}</Link>
        </div>
      ))}
    </div>
  );
}
