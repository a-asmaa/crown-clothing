import CategoriesMenu from "../components/categories/categories.component";
import {Outlet} from 'react-router-dom'


const  Home = () => {
  return (
    <>
        <Outlet />
        <CategoriesMenu />

    </>
  );
}

export default Home;
