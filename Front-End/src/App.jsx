import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SignInLayout from "./Layouts/SignInLayout";
import LogInLayout from "./Layouts/LogInLayout";
import UserSignedProvider, { UserSigned } from "./store/userSignStore.jsx";
import { useContext } from "react";
import DashboardLayout from "./Layouts/DashboardLayout.jsx";
import "./styles/globals.css";

const AuthRoute = ({ children }) => {
  const { isAuthenticated } = useContext(UserSigned);
  return isAuthenticated ? children : <Navigate to="/login"/>
};

const SafetyRoute = ({children}) => {
  const {isAuthenticated} = useContext(UserSigned);
  return isAuthenticated ? <Navigate to="/" replace/> : children;
}

const NavigationProvider = ({children}) => {
  const navigate = useNavigate();
  return <UserSignedProvider navigate={navigate}>{children}</UserSignedProvider>
}

function App() {

  return(
      <BrowserRouter>
        <NavigationProvider>
        <Routes>
          <Route path="/" element={
            <AuthRoute>
              <DashboardLayout/>
            </AuthRoute>
          }/>
          <Route path="/signin" element={
            <SafetyRoute>
              <SignInLayout/>
            </SafetyRoute>
          }/>
          <Route path="/login" element={
            <SafetyRoute>
              <LogInLayout/>
            </SafetyRoute>
          }/>
        </Routes>
        </NavigationProvider>
      </BrowserRouter>
  )
}

export default App;