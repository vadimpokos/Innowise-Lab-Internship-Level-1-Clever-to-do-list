import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import './styles.css'

const LoaderComponent = () => {
  const antIcon = <LoadingOutlined className='loader' spin />

  return <Spin indicator={antIcon} />
}

export const Loader = React.memo(LoaderComponent)
