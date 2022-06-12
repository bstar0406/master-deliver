import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Login from "./pages/Login";
import VendorConsole from "./pages/vendors/VendorConsole";
import ProductListing from "./pages/vendors/ProductListing";
import AllProductsListed from "./pages/vendors/AllProductsListed";
import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";
import VendorNavbar from "./components/vendorconsolecomponents/VendorNavbar";
import VendorSidebar from "./components/vendorconsolecomponents/VendorSidebar";
import VendorManagement from "./pages/admin/VendorManagement";
import UpdateVendorProduct from "./pages/admin/UpdateVendorProduct";
import AdminNavbar from "./components/admincomponents/AdminNavbar";
import { MainWrapper } from "./components/GlobalStyles";
import { AuthProvider } from "./helpers/Auth";
import {
  FirebaseAppProvider,
  preloadFirestore,
  preloadAuth,
  preloadUser,
  preloadStorage,
  SuspenseWithPerf,
} from "reactfire";
import { firebaseApp, firebaseConfig } from "./helpers/firebase";

// new imports for the new frontend
import "./App.scss"; //import the whole css
import "bootstrap/dist/css/bootstrap.min.css"; //import bootstrap
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Layout/Header";
import Boxes from "./pages/Boxes";
import Hive from "./pages/Hive";
import Home from "./pages/Home";
import SideBar from "./Layout/Sidebar";

const App = () => {
  // Preload Firestore & Auth so it's available throughout the app
  preloadAuth({ firebaseApp });
  preloadFirestore({ firebaseApp });
  preloadUser({ firebaseApp });
  preloadStorage({ firebaseApp });

  return (
    <>
      <GlobalStyles />
      <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
        <SuspenseWithPerf fallback={"loading"}>
          <AuthProvider>
            <Router>
              <Switch>
                <PublicRoute exact path="/login" component={Login} />
                <Route path="/vendor" component={VendorApp} />
                <Route path="/admin" component={AdminApp} />
                <Route path="/" component={NewFrontendApp} />
              </Switch>
            </Router>
          </AuthProvider>
        </SuspenseWithPerf>
      </FirebaseAppProvider>
    </>
  );
};

const NewFrontendApp = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <SideBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/boxes">
            <Boxes />
          </Route>
          <Route path="/hive">
            <Hive />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const VendorApp = () => {
  return (
    <>
      <VendorNavbar />
      <MainWrapper>
        <VendorSidebar />
        <Switch>
          <PrivateRoute exact path="/vendor" component={VendorConsole} />
          <PrivateRoute
            exact
            path="/vendor/product"
            component={ProductListing}
          />
          <PrivateRoute path="/vendor/product/:id" component={ProductListing} />
          <PrivateRoute
            exact
            path="/vendor/all-products"
            component={AllProductsListed}
          />
        </Switch>
      </MainWrapper>
    </>
  );
};

const AdminApp = () => {
  return (
    <>
      <AdminNavbar />
      <MainWrapper>
        <Switch>
          <PrivateRoute
            exact
            path="/admin/pending"
            component={VendorManagement}
          />
          <PrivateRoute
            exact
            path="/admin/approved"
            component={VendorManagement}
          />
          <PrivateRoute
            path="/admin/:vendorId/:productId"
            component={UpdateVendorProduct}
          />
        </Switch>
      </MainWrapper>
    </>
  );
};

export default App;
