import { ThemeProvider } from '@/components/theme-provider'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import DefaultLayout from './components/Layout/DefaultLayout'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route
            index
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
