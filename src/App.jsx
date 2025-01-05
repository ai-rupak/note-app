import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Notes from './components/Notes'
import ViewNotes from './components/ViewNotes'
import Home from './components/Home'
import About from './components/About'


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
      {
        path:'/about',
        element: <div><Navbar/> <About/></div>
      }
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
