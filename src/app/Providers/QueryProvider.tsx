import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface IQueryProvider {
  children: React.ReactNode;
}

export const QueryProvider = ({ children }: IQueryProvider) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
