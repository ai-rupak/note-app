import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import ViewNotes from './components/ViewNotes'
import Home from './components/Home'


function App() {
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:
        <div>
          <Navbar />
          <Home />
          </div>
         
      },

      {
        path:'/pastes',
        element: <div>
        <Navbar />
        <Notes />
        </div>
      },

      {
        path:'/pastes/:id',
        element: <div>
        <Navbar />
        <ViewNotes />
        </div>
      },
    ]
  )

  return (
    <div>
      <RouterProvider router={router}>
        
        
      </RouterProvider>
    </div>
  )
}

export default App
