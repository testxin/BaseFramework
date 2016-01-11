/**
 * Created by xinsw on 2015/12/29.
 */
import React from 'react'
import ReactDom from 'react-dom'
import Hello from '../components/helloword.jsx'
import Button from '../components/button.jsx'
import Profile from '../components/profile.jsx'
import 'antd/lib/index.css'
import  { DatePicker }  from 'antd'


ReactDom.render(<Hello date={new Date()}/>, document.getElementById('app'));


//使用htmldom

var dom = <div className="a">测试htmlDom</div>
ReactDom.render(dom, document.getElementById('app1'));

//使用组件 首字母必须大写，固定的约定
//React 的 JSX 里约定分别使用首字母大、小写来区分本地组件的类和 HTML 标签。
var MyComponents = React.createClass({
    render(){
        return <div>{this.props.foo}</div>
    }
});

//属性表达式
var props = { foo: 'default' };
var component = <MyComponents {...props} foo={'override'} />;
console.log(component.props.foo); // 'override'

ReactDom.render(component, document.getElementById('app2'));


ReactDom.render(<Button/>,document.getElementById('app3'));


//组合组件

ReactDom.render(<Profile username="tester" imgUrl="resource/images/icon.png"  />,document.getElementById('app4'));

ReactDom.render(<DatePicker />,document.getElementById('app5'));