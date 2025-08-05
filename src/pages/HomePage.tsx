import { Grid, GridItem } from '@chakra-ui/react';

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
      </GridItem>
    </Grid>
  );
};

export default HomePage;