import React, { Component } from 'react'
import Table from '../components/Table'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>I am a dashboard. You are logged in.</div>
        <Table />
      </div>
    )
  }
}
