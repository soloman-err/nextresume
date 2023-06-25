import { createBrowserRouter } from 'react-router-dom'
import Root from '../layouts/Root'
import Resume from '../pages/user/resume/Resume'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Resume />
      }
    ]
  }
])

export default router
