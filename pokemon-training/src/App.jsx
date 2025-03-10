
import { HomeContainer } from './subdomains/home/HomeContainer'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router';
import { TrainingContainer } from './subdomains/training/TrainingContainer';

function App() {

  const router = createBrowserRouter([
    {
        path: '/',
        element:  <HomeContainer/>,
    },
    {
        path: '/training',
        element:  <TrainingContainer/>,
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
