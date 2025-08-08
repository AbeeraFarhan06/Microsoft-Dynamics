import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import NavBar2 from '../components/NavBar2';
import AIPoweredSales from '../components/AIPoweredSales';
import TextFooter from '../components/TextFooter';
import Overview from '../components/Overview';
import ContactBar from '../components/ContactBar';

const Layout = () => {
  return (
    <>
       <NavBar />
       <Banner />
       <NavBar2 />
       <Overview/>
       <AIPoweredSales />
       <Box padding={5}>
        <Outlet />
       </Box>
       <ContactBar/>
       <TextFooter/>
       <Footer />
    </>
  );
};

export default Layout;