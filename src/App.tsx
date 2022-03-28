import {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";

//!Widgets
import LoaderPage from "components/widgets/LoaderPage";

//!Components
import Footer from "components/footer";
import Header from "components/header";

import "./App.css";
import ProtectedRoutePublic from "components/hocs/ProtectedRoutePublic";
import ProtectedRoutePrivate from "components/hocs/ProtectedRoutePrivate";

import HomeCart from "components/pages/cart/home";

//!Pages
const Home = lazy(() => import("components/pages/home"));
const HomeServicesAddress = lazy(
    () => import("components/pages/home-services/address")
);
const HomeServicesPlansWelcome = lazy(
    () => import("components/pages/home-services/plans-welcome")
);
const HomeServicesPlans = lazy(
    () => import("components/pages/home-services/plans")
);

const HomeServicesPlansQuote = lazy(
     () => import("components/pages/home-services/quote")
);
const Login = lazy(() => import("components/pages/login"));

const ShoppingCart = lazy(() => import("components/pages/cart/shopping-cart"));

const UserInformation = lazy(() => import("components/pages/cart/user-information"));


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
                        }
                    ></Route>

                    <Route
                        path="/servicios-hogar-direccion"
                        element={
                            <Suspense fallback={<LoaderPage></LoaderPage>}>
                                <HomeServicesAddress></HomeServicesAddress>
                            </Suspense>
                        }
                    ></Route>

                    <Route
                        path="/servicios-hogar-planes-bienvenida"
                        element={
                            <Suspense fallback={<LoaderPage></LoaderPage>}>
                                <HomeServicesPlansWelcome></HomeServicesPlansWelcome>
                            </Suspense>
                        }
                    ></Route>
                    <Route
                        path="/servicios-hogar-planes"
                        element={
                            <Suspense fallback={<LoaderPage></LoaderPage>}>
                                <HomeServicesPlans></HomeServicesPlans>
                            </Suspense>
                        }
                    ></Route>

                    <Route
                        path="/servicios-hogar-cotizacion"
                        element={
                            <Suspense fallback={<LoaderPage></LoaderPage>}>
                                <HomeServicesPlansQuote></HomeServicesPlansQuote>
                            </Suspense>
                        }
                    ></Route>

                    {/* Proteger Rutas Privadas */}
                    <Route path="/" element={<ProtectedRoutePrivate />}>

                        <Route path="/cart" element={<HomeCart></HomeCart>}>
                            <Route
                                path=""
                                element={
                                        <Suspense fallback={<LoaderPage></LoaderPage>}>
                                                <ShoppingCart></ShoppingCart>
                                        </Suspense>
                                }
                            ></Route>
                            <Route
                                path="user-information"
                                element={
                                        <Suspense fallback={<LoaderPage></LoaderPage>}>
                                            <UserInformation></UserInformation>
                                        </Suspense>
                                }
                            ></Route>
                        </Route>
                       
                    </Route>
                   
                    {/* Proteger Rutas Públicas */}
                    {/* En este caso sería la vista login y register */}
                    <Route path="/" element={<ProtectedRoutePublic />}>
                        <Route
                            path="login"
                            element={
                                    <Suspense fallback={<LoaderPage></LoaderPage>}>
                                            <Login></Login>
                                    </Suspense>
                            }
                        ></Route>
                    </Route>
                </Routes>
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
