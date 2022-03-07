import { AuthProvider } from "./context/AuthProvider";
import { AppRouter } from "./routers/AppRouter";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
};
