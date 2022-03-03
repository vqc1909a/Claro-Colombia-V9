import {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';

//!Widgets
import LoaderPage from "components/widgets/loader-page";

//!Components
import Footer from "components/footer";
import Header from "components/header";

import './App.css';

//!Pages
const HomeServicesAddress = lazy(() => import("components/pages/home-services/address"));
const HomeServicesPlansWelcome = lazy(() => import("components/pages/home-services/plans-welcome"))
const HomeServicesPlans = lazy(() => import("components/pages/home-services/plans"));
const Home = lazy(() => import("components/pages/home"));

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route 
            path="/"
            element={
              <Suspense fallback={<LoaderPage></LoaderPage>}>
                <Home></Home>
              </Suspense>
            }>
          </Route>

          <Route 
            path="/servicios-hogar-direccion"
            element={
              <Suspense fallback={<LoaderPage></LoaderPage>}>
                <HomeServicesAddress></HomeServicesAddress>
              </Suspense>
            }>
          </Route>

          <Route 
            path="/servicios-hogar-planes-bienvenida"
            element={
              <Suspense fallback={<LoaderPage></LoaderPage>}>
                <HomeServicesPlansWelcome></HomeServicesPlansWelcome>
              </Suspense>
            }>
          </Route>

          <Route 
            path="/servicios-hogar-planes"
            element={
              <Suspense fallback={<LoaderPage></LoaderPage>}>
                <HomeServicesPlans></HomeServicesPlans>
              </Suspense>
            }>
          </Route>
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
