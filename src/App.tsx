import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ThemeProvider } from "@/components/theme-provider"

import Dashboard from './pages/dashboard'
import Creation from './pages/creation'
import Roadmap from './pages/roadmap'
import Summary from './pages/summary'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/creation" element={<Creation />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="*" element={<Summary />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
