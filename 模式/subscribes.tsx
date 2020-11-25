import React, { useLayoutEffect } from 'react';

// 1、利用new Set定义一个数组
const Subscribe = new Set<() => void>()

// 2、定义一个函数进行循环发布定于
const handleResize = () => {
  Subscribe.forEach((callback) => callback())
}

useLayoutEffect(() => {
  // 需要实现功能的方法
  const handleOverflow = () => {
    console.log('1 :>> ', 1);
  }

  // 3、判断订阅器数组长度，为0则添加方法
  if (Subscribe.size === 0) {
    window.addEventListener('resize', handleResize)
    Subscribe.add(handleOverflow)
  }

  // 4、需要执行实现功能方法
  handleOverflow()

  return () => {
    // 5、需要删除订阅器中已经执行的函数
    Subscribe.delete(handleResize)

    // 6、判断subscribe订阅器数组长度是否为0，为0则清除
    if (Subscribe.size === 0) {
      window.removeEventListener('resize', handleResize)
    }
  }
}, [])

const Name: React.FC = () => {
  return (
    <div>123</div>
  )
}

export default Name