import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import UsersList from './pages/UsersList'
import EditUser from './pages/EditUser'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id/edit" element={<EditUser />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
)
