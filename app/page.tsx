import Nav from './components/Nav'
import Hero from './components/Hero'
import KeyFindings from './components/KeyFindings'
import ExperimentTracker from './components/ExperimentTracker'
import PerformanceDashboard from './components/PerformanceDashboard'
import GrowthFormula from './components/GrowthFormula'
import WhatsNext from './components/WhatsNext'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Nav />
      <Hero />
      <div id="findings">
        <KeyFindings />
      </div>
      <div id="experiments">
        <ExperimentTracker />
      </div>
      <div id="dashboard">
        <PerformanceDashboard />
      </div>
      <div id="formula">
        <GrowthFormula />
      </div>
      <WhatsNext />
      <Footer />
    </main>
  )
}
