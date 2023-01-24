import React from 'react'
import { connect } from 'react-redux'

export const Test = (props) => {
  return (
    <div>Test</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Test)