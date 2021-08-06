import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
// import {
//   useState
// } from 'react';

const App = () => {

  // const [isOpen, setSidebarOpen] = useState(false);

  // const openSidebar = () => {
  //   setSidebarOpen(true);
  // }

  // const closeSidebar = () => {
  //   setSidebarOpen(false);
  // }
  const loading = (
    <div>
      Loading...
    </div>
  )

  //home
  const Layout = React.lazy(() => import('./Layout/Layout'));
  //
  //other pages

  //
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route path="/" name="Home" render={(props) => <Layout {...props} />} />
        </Switch>
      </React.Suspense>

    </BrowserRouter>
  )
}

export default App;