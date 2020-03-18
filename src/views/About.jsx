import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { aboutAdd, aboutCut } from '@actions/about/actions'

class About extends Component {
  handleAdd() {
    const { dispatch } = this.props
    dispatch(aboutAdd())
  }

  handleCut() {
    const { dispatch } = this.props
    dispatch(aboutCut())
  }

  render() {
    const { count } = this.props
    return (
      <div>
        <h3>{count}</h3>
        <Button onClick={() => this.handleAdd()}>加1</Button>
        <Button onClick={() => this.handleCut()}>减1</Button>
      </div>
    )
  }
}

const mapStateProps = (state) => ({
  count: state.aboutReducer.count
})

export default connect(
  mapStateProps,
  null
)(About)
