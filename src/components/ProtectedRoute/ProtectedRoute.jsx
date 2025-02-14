import { Navigate } from "react-router-dom";
import useAuthStore from "../../lib/store";

const ProtectedRoute = ({ element }) => {
  const token = useAuthStore((state) => state.token);

  return token ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
