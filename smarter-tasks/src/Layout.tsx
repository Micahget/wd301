import { Outlet, useLocation } from "react-router-dom";
import Header from './components/Header';

const Layout = () => {
  const location = useLocation();

  // Check if the current route is /notfound
  const isNotFoundRoute = location.pathname === '/notfound';

  return (
    <>
      {!isNotFoundRoute && <Header />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;