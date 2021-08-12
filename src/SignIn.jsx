import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { loginEmail } from './redux/actions'
import { Link, useRouteMatch } from 'react-router-dom'
import './login_logout.css'
import { AUTH_FORM_CONFIG } from './authFormConfig'

export const SignIn = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const match = useRouteMatch()

  return (
    <div className='wrapper'>
      <h1>Sign In page</h1>
      <Form
        name={AUTH_FORM_CONFIG.name.basic}
        labelCol={AUTH_FORM_CONFIG.labelCol.Form}
        wrapperCol={AUTH_FORM_CONFIG.wrapperCol.Form}
        initialValues={AUTH_FORM_CONFIG.initialValues}
      >
        <Form.Item
          label={AUTH_FORM_CONFIG.label.Username}
          name={AUTH_FORM_CONFIG.name.username}
          rules={AUTH_FORM_CONFIG.rules.Username}
        >
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label={AUTH_FORM_CONFIG.label.Password}
          name={AUTH_FORM_CONFIG.name.password}
          rules={AUTH_FORM_CONFIG.rules.Password}
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item
          name={AUTH_FORM_CONFIG.name.remember}
          valuePropName={AUTH_FORM_CONFIG.valuePropName.checked}
          wrapperCol={AUTH_FORM_CONFIG.wrapperCol.Form_Item}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={AUTH_FORM_CONFIG.wrapperCol.Form_Item}>
          <Button
            type={AUTH_FORM_CONFIG.type.primary}
            htmlType={AUTH_FORM_CONFIG.htmlType.submit}
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
          <Link to={`${match.path}/signup`}>Sign Up</Link>
        </Button>
      </div>
    </div>
  )
}
