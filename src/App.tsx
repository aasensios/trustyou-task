import { useEffect, useState } from 'react'
import Table from './components/Table'
import { ReviewDistribution } from './models/api.model'
import { fetchReviewDistribution } from './services/api.service'
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
      <h2>Review Distribution</h2>
      <section className="section table">
        <h3>Table</h3>
        {reviewDistribution && <Table data={reviewDistribution.data} />}
      </section>
      <section className="section pie">
        <h3>Pie Chart</h3>
        {reviewDistribution && <Pie data={reviewDistribution.data} />}
      </section>
    </div>
  )
}
