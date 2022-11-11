import * as React from 'react';

import Map from '../../components/Map/Map';
import Categories from '../../components/Categories/Categories';
import Layout from '../../components/Layout/Layout';

const Main = () => {

  return (
    <Layout>
      <Categories />
      <Map />
    </Layout>
  );
};
export default Main;
