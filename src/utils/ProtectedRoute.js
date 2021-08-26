import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ element, auth, path, ...rest }) => {
  console.log(auth);
  if (!auth) {
    return (
      <Navigate
        to="/signup"
        state={{
          prevLocation: path,
          error: "You need to login first!",
        }}
      />
    );
  }

  return <Route element={element} {...rest} />;
};

export default ProtectedRoute;
