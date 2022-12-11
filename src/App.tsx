import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReviewDistribution from './components/ReviewDistribution'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReviewDistribution />
    </QueryClientProvider>
  )
}
