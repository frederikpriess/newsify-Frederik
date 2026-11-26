import {Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx'
import Home from './components/Home.jsx'
import Archive from './components/Archive.jsx'
import Popular from './components/Popular.jsx'
import Settings from './components/Settings.jsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/settings" element={<Settings />} />
      </Routes>
      <Navigation />
    </>
  )
}

export default App
