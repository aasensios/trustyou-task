import { useEffect, useState } from 'react'
import Table from './components/Table'
import { ReviewDistribution } from './models/api'
import { fetchReviewDistribution } from './services/api'
import './App.css'

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
      <section className="section">
        <h2>First subtask: Table</h2>
        {reviewDistribution && <Table data={reviewDistribution.data} />}
      </section>
    </div>
  )
}
