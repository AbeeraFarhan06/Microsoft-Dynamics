import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import NavBar2 from '../components/NavBar2';
import AIPoweredSales from '../components/AIPoweredSales';
import Pricing from '../components/Pricing';
import Partners from '../components/Partners';

const Layout = () => {
  return (
    <>
       <NavBar />
       <Banner />
       <NavBar2 />
       <AIPoweredSales />
       <Box padding={5}>
        <Outlet />
       </Box>
       <Footer />
    </>
  );
};

export default Layout;