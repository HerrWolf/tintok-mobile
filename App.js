import { ThemeProvider, AuthProvider } from "./src/context";
import { RouteNavigation } from "./src/navigation/RouteNavigation";
import "./src/utils/yup-methods";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouteNavigation />
      </AuthProvider>
    </ThemeProvider>
  );
}
