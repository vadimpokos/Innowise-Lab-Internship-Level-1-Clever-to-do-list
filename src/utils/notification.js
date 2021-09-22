import { notification } from 'antd'

export const openNotification = ({
  type,
  message,
  description,
  placement = 'bottomLeft',
}) => {
  notification[type]({
    message,
    description,
    placement,
  })
}
