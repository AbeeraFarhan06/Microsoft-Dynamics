import { Grid, GridItem } from '@chakra-ui/react';
import Pricing from '../components/Pricing';
import Partners from '../components/Partners';
import CustomerStories from '../components/CustomerStories';
import Resources from '../components/Resources';
import TextFooter from '../components/TextFooter';
import Nextstep from '../components/NextStep';

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
       <Resources />
       <Nextstep/>
      </GridItem>
    </Grid>
  );
};

export default HomePage;