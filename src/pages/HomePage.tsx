import { Grid, GridItem } from '@chakra-ui/react';
import Pricing from '../components/Pricing';
import Partners from '../components/Partners';
import CustomerStories from '../components/CustomerStories';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main" `,
        lg: `"main" `, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr",
      }}
    >
      <GridItem area="main">
       <Pricing />
       <Partners />
       <CustomerStories />
      </GridItem>
    </Grid>
  );
};

export default HomePage;