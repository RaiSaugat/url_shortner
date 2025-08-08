import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Home from './Home';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
