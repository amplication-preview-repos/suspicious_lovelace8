import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { EmailMetadataList } from "./emailMetadata/EmailMetadataList";
import { EmailMetadataCreate } from "./emailMetadata/EmailMetadataCreate";
import { EmailMetadataEdit } from "./emailMetadata/EmailMetadataEdit";
import { EmailMetadataShow } from "./emailMetadata/EmailMetadataShow";
import { OAuthTokenList } from "./oAuthToken/OAuthTokenList";
import { OAuthTokenCreate } from "./oAuthToken/OAuthTokenCreate";
import { OAuthTokenEdit } from "./oAuthToken/OAuthTokenEdit";
import { OAuthTokenShow } from "./oAuthToken/OAuthTokenShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Email Analysis Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="EmailMetadata"
          list={EmailMetadataList}
          edit={EmailMetadataEdit}
          create={EmailMetadataCreate}
          show={EmailMetadataShow}
        />
        <Resource
          name="OAuthToken"
          list={OAuthTokenList}
          edit={OAuthTokenEdit}
          create={OAuthTokenCreate}
          show={OAuthTokenShow}
        />
      </Admin>
    </div>
  );
};

export default App;
