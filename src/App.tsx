import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import ChatDetails from "./Components/ChatDetails";
import EmptyChat from "./Components/EmptyChat";
import Home from "./Pages/Home";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="main" element={<MainLayout />}>
            <Route index element={<EmptyChat />} />
            <Route path=":id" element={<ChatDetails />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
