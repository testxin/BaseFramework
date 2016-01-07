/**
 * Created by xinsw on 2015/12/29.
 */
import '../resource/style/style.scss'
import React from 'react'

//内联style
var style = {
    color: 'yellow'
};


export default class Hello extends React.Component {
    render() {
        return <h1 style={style}>Hellpw React FK12 Your Sister</h1>;
    }
}

