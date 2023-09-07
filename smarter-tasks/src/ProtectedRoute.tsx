// src/ProtectedRoute.tsx

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const authenticated = !!localStorage.getItem("authToken"); // so here we are checking if the user is authenticated or not. this happens when the user open the app and the app checks if there is a token in the local storage or not. if there is a token then the user is authenticated and the app will render the children (the layout component) otherwise the app will redirect the user to the signin page.
  if (authenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to="/signin" />;
 }
}