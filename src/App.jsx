import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Introduction from './pages/Introduction'
import Proposals from './pages/Proposals'
import Activities from './pages/Activities'
import WorkPlan from './pages/WorkPlan'
import Studios from './pages/Studios'
import Summary from './pages/Summary'
import YearReport from './pages/YearReport'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="proposals" element={<Proposals />} />
        <Route path="activities" element={<Activities />} />
        <Route path="workplan" element={<WorkPlan />} />
        <Route path="studios" element={<Studios />} />
        <Route path="summary" element={<Summary />} />
        <Route path="yearreport" element={<YearReport />} />
      </Route>
    </Routes>
  )
}

export default App
