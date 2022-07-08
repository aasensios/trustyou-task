import { useEffect, useState } from 'react'
import Table from './components/Table'
import { ReviewDistribution } from './models/api'
import { fetchReviewDistribution } from './services/api'
import './App.css'
import Pie from './components/Pie'

export default function App() {
  const [reviewDistribution, setReviewDistribution] =
    useState<ReviewDistribution>()

  useEffect(() => {
    async function fetchReviewDistributionEffect() {
      setReviewDistribution(await fetchReviewDistribution())
    }
    fetchReviewDistributionEffect()
  }, [])

  return (
    <div className="app">
      <h1>TrustYou Probation Task</h1>
      <section className="table-section">
        <h2>First subtask: Table</h2>
        {reviewDistribution && <Table data={reviewDistribution.data} />}
      </section>
      <section className="pie-section">
        <h2>Second subtask: Pie Chart</h2>
        {reviewDistribution && <Pie data={reviewDistribution.data} />}
      </section>
    </div>
  )
}
