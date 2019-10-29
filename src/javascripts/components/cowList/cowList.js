import cowData from '../../helpers/data/cows';

import './cowList.scss';

const buildCows = () => {
  // console.log('inside cow builder');
  cowData.getCows()
    .then((response) => {
      console.log('cow array from cowList', response);
    })
    // call a domString builder function and pass in cows or a response
    .catch((error) => {
      console.error('shit broke', error);
    });
};


export default { buildCows };
