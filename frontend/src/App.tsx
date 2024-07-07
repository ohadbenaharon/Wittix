import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import { Login } from "./pages/Login";
import { Signup } from "./pages/SignUp";
import { UserProvider } from "./providers/UserProvider";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/list",
      element: <HomePage />,
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <UserProvider>
            <RouterProvider router={router} />
          </UserProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
