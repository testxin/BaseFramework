/**
 * Created by xinsw on 2015/12/29.
 */
//import '../../resource/style/style.css'
import React from 'react'

//内联style
var style = {
    color: 'yellow'
};


export default class Hello extends React.Component {
    render() {
        return <h1 style={style}>Hello World</h1>;
    }
}


export default class SearchInput extends React.Component {
    render() {
        return <input class="searchInput" placeholder="请输入您需要搜1111索的内容"/>;
    }
}

export default class CheckOptions extends React.Component {
    render() {
        return <span class="icon-check"></span>;
    }
}