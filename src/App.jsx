import Structure from './component/Structure';
import NextPage from './component/NextPage';
import ProfileList from './component/ProfileList';
import LastPage from './component/LastPage';

import './css/interface.css';
import './css/mobile.css';
import './css/structure.css';
import './css/profile.css';

export default function App(){
  return(
    <>
      <Structure />
      <NextPage />
      <ProfileList />
      <LastPage />
    </>
  );
}
