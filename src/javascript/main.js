/**
 * Created by Administrator on 2015/12/29.
 */
import React from 'react'
import ReactDom from 'react-dom'
import Hello from '../components/helloword.jsx'


// When you render it, assign it to a variable
// 当你渲染它的时候，让它赋值给一个变量

ReactDom.render(<Hello />, document.getElementById('app'));
