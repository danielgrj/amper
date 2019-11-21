import axios from 'axios';

const SERVICE = axios.create({ baseURL: 'https://ammper.herokuapp.com/' });

const AMMPER_SERVICE = {
  getNodes: () => {
    return SERVICE.get('d_nodes');
  },
  getDetails: () => {
    return SERVICE.get('d_node_pmls');
  }
};

export default AMMPER_SERVICE;
