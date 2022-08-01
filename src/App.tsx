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

//!El componente CartHome es el Outlet
import CartHome from "components/pages/cart/home";

//!Estos componentes no llevarán lazy load xq estos son views que ocupan toda la pantalla
import CartSecurityWelcome from "components/pages/cart/security/welcome";
import CartSecurityRedirection from "components/pages/cart/security/redirection";

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

const CartUserInformation = lazy(() => import("components/pages/cart/user-information"));


const CartSecurityHome = lazy(() => import("components/pages/cart/security/home"));


const CartContractingServices = lazy(() => import("components/pages/cart/contracting-services"));

const CartInstallationSchedule = lazy(() => import("components/pages/cart/installation-schedule"));

const CartResumen = lazy(() => import("components/pages/cart/resumen"));

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

                        <Route path="/cart" element={<CartHome></CartHome>}>
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
                                            <CartUserInformation></CartUserInformation>
                                        </Suspense>
                                }
                            ></Route>

                            <Route path="security/welcome" element={<CartSecurityWelcome></CartSecurityWelcome>}
                            ></Route>

                            <Route path="security" element={
                                <Suspense fallback={<LoaderPage></LoaderPage>}>
                                        <CartSecurityHome></CartSecurityHome>
                                </Suspense>
                            }
                            ></Route>

                            <Route path="security/redirection" element={<CartSecurityRedirection></CartSecurityRedirection>}
                            ></Route>
                            
                            <Route path="contracting-services" element={
                                    <Suspense fallback={<LoaderPage></LoaderPage>}>
                                            <CartContractingServices></CartContractingServices>
                                    </Suspense>
                                }
                            ></Route>

                            <Route path="installation-schedule" element={
                                    <Suspense fallback={<LoaderPage></LoaderPage>}>
                                            <CartInstallationSchedule></CartInstallationSchedule>
                                    </Suspense>
                                }
                            ></Route>
                            <Route path="resumen" element={
                                    <Suspense fallback={<LoaderPage></LoaderPage>}>
                                            <CartResumen></CartResumen>
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
