import React, { Component } from 'react'
import { Modal, Button } from 'antd'

class Detail extends Component {
  constructor() {
    super()
    this.state = {
      visible: false
    }
  }

  showModal() {
    this.setState({
      visible: true
    })
  }

  handleOk() {
    this.setState({
      visible: false
    })
  }

  render() {
    const { visible } = this.state
    return (
      <div>
        <i>我是Detail内容</i>
        <div>
          <Button type="primary" onClick={() => this.showModal()}>点击</Button>
        </div>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleOk()}
        >
          <p>Some contents...</p>
          <p>我是antd模态框</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}
export default Detail
