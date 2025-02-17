import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignInLayout from "./Layouts/SignInLayout";
import LogInLayout from "./Layouts/LogInLayout";
import UserSignedProvider, { UserSigned } from "./store/userSignStore.jsx";
import { useContext } from "react";
import DashboardLayout from "./Layouts/DashboardLayout.jsx";
import NavigationProvider from "./store/NavigationStore.jsx";
import ProjectContextProvider from "./store/TaskStore.jsx";
import CreateTaskLayout from "./Layouts/CreateTaskLayout.jsx";

const AuthRoute = ({ children }) => {
  const { isAuthenticated } = useContext(UserSigned);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const SafetyRoute = ({ children }) => {
  const { isAuthenticated } = useContext(UserSigned);
  return isAuthenticated ? <Navigate to="/" replace /> : children;
};

function App() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <UserSignedProvider>
          <ProjectContextProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <AuthRoute>
                    <DashboardLayout />
                  </AuthRoute>
                }
              ></Route>
              <Route path="/createTask" element={<CreateTaskLayout />} />
              <Route
                path="/signin"
                element={
                  <SafetyRoute>
                    <SignInLayout />
                  </SafetyRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <SafetyRoute>
                    <LogInLayout />
                  </SafetyRoute>
                }
              />
            </Routes>
          </ProjectContextProvider>
        </UserSignedProvider>
      </NavigationProvider>
    </BrowserRouter>
  );
}

export default App;
