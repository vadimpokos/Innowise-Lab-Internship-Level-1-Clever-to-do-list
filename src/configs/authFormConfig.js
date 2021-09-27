export const AUTH_FORM_CONFIG = {
  name: {
    basic: 'basic',
    username: 'username',
    password: 'password',
    confirm_password: 'confirm_password',
    remember: 'remember',
  },
  label: {
    Username: 'Username',
    Password: 'Password',
    Confirm: 'Confirm Password',
  },
  labelCol: {
    Form: {
      span: 8,
    },
  },
  wrapperCol: {
    Form: {
      span: 16,
    },
    Form_Item: {
      offset: 8,
      span: 16,
    },
  },
  initialValues: {
    remember: true,
  },
  rules: {
    Username: [
      {
        required: true,
        message: 'Please input your username!',
      },
    ],
    Password: [
      {
        required: true,
        message: 'Please input your password!',
      },
    ],
    Confirm: [
      {
        required: true,
        message: 'Please confirm your password!',
      },
    ],
  },
  valuePropName: {
    checked: 'checked',
  },
  type: {
    primary: 'primary',
  },
  htmlType: {
    submit: 'submit',
  },
}
