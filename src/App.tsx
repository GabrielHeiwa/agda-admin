import React, { useState, useEffect } from "react";
import buildHasuraProvider from "ra-data-hasura";
import { Admin, Resource, DataProvider, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import { InMemoryCache, ApolloClient } from "@apollo/client";

const apollo = new ApolloClient({
  uri: "http://localhost:8080/v1/graphql",

  headers: {
    "x-hasura-admin-secret": "hermes123",

    // "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUhhc3VyYS1Vc2VyLUlkIjoiMSIsIlgtSGFzdXJhLVJvbGUiOiJ1c2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.C64IooXjOB7H32ta9UoBt_R7BVzdd_nj_4pT7AyJtoI"
  },
  cache: new InMemoryCache(),
});

const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider>();

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        client: apollo,
      });
      setDataProvider(() => dataProvider);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <p>Loading...</p>;

  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="users"
        list={ListGuesser}
        edit={EditGuesser}
        create={ShowGuesser}
      />

      <Resource
        name="phones"
        list={ListGuesser}
        // edit={PostEdit}
        // create={PostCreate}
      />

      <Resource
        name="phone_numbers"
        list={ListGuesser}
        // edit={PostEdit}
        // create={PostCreate}
      />
      
      <Resource
        name="messages"
        list={ListGuesser}
        // edit={PostEdit}
        // create={PostCreate}
      />
      
      <Resource
        name="messages_groups"
        list={ListGuesser}
        // edit={PostEdit}
        // create={PostCreate}
      />

      <Resource
        name="phone_numbers_group"
        list={ListGuesser}
        // edit={PostEdit}
        // create={PostCreate}
      />

    </Admin>
  );
};

export default App;
