import cowList from './components/cowList/cowList';
import farmerList from './components/farmerList/farmerList';
// import farmerCowData from './helpers/data/farmerCowData';

import '../styles/main.scss';

const init = () => {
  cowList.buildCows();
  farmerList.buildFarmers();

  // farmerCowData.getFarmerCows()
  //   .then((farmerCows) => {
  //     console.log('from main.js', farmerCows);
  //   })
  //   .catch((error) => console.error(error));
};

init();
