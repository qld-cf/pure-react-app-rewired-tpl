import React, { useState } from 'react'
import CommonWrap from "@components/CommonWrap"
import { Button, Input, Row, Col, message } from "antd"

const Login = (props: any) => {
  const [loginInfo, setLoginInfo] = useState({
    env: '',
    token: ""
  })

  const changeLoginInfo = (type: string, value: any) => {
    setLoginInfo({ ...loginInfo, [type]: value })
  }

  const login = () => {
    if (!loginInfo.env || !loginInfo.token) {
      message.error("请输入上面信息在登录")
      return false
    }
    props.history.push("/home")
  }
  return (
    <CommonWrap id='logincomwrap'>
      <div className='mid' style={{ flexDirection: "column" }}>
        <Row style={{ marginBottom: 15 }}>登录现在的中台账户获取token信息</Row>
        <Row className='' style={{ marginBottom: 15 }}>
          <Col span={12}>env:（dev,test,sit,pre）</Col>
          <Col span={12}>
            <Input
              style={{ width: 200 }}
              value={loginInfo.env}
              onChange={e => {
                changeLoginInfo("env", e.target.value)
              }}
            />
          </Col>
        </Row>

        <Row className='' style={{ marginBottom: 15 }}>
          <Col span={12}>token值</Col>
          <Col span={12}>
            <Input
              style={{ width: 200 }}
              value={loginInfo.token}
              onChange={e => {
                changeLoginInfo("token", e.target.value)
              }}
            />
          </Col>
        </Row>
        <div className='zh'>
          <Button type='primary' onClick={login}>
            登录
          </Button>
        </div>
      </div>
    </CommonWrap>
  )
}

export default Login
