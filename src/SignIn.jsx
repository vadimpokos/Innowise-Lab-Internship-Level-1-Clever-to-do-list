import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { loginEmail } from './redux/actions'
import { Link } from 'react-router-dom'
import './login_logout.css'

export const SignIn = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className='wrapper'>
      <h1>Sign In page</h1>
      <Form
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input onChange={handleEmail} />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password onChange={handlePassword} />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type='primary'
            htmlType='submit'
            onClick={() => {
              dispatch(loginEmail(email, password))
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div>
        Haven`t account yet?
        <Button>
          <Link to='/signup'>Sign Up</Link>
        </Button>
      </div>
    </div>
  )
}
