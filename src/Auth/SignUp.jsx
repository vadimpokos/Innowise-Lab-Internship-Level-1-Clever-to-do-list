import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { createUserWithEmail } from '../redux/actions'
import { Link } from 'react-router-dom'
import './login_logout.css'
import { AUTH_FORM_CONFIG } from './authFormConfig'

export const SignUp = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div className='wrapper'>
      <h1>Sign Up page</h1>
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
          label={AUTH_FORM_CONFIG.label.Confirm}
          name={AUTH_FORM_CONFIG.name.confirm_password}
          rules={AUTH_FORM_CONFIG.rules.Confirm}
        >
          <Input.Password
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
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
              dispatch(createUserWithEmail(email, password, confirmPassword))
            }}
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div>
        Already have an account?
        <Button>
          <Link to='/auth'>Sign In</Link>
        </Button>
      </div>
    </div>
  )
}
