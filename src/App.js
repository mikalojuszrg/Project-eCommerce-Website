import { QueryClientProvider, QueryClient } from "react-query";
import Routes from "./routes/Routes";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
};

export default App;
