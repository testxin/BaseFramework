/**
 * Created by xinsw on 2016/1/8.
 */

import React from 'react'
import '../resource/style/style.scss'

var style={
    backgroundColor:'red',
    fontSize:'16px'
}

export default class ProfileName extends React.Component {
    render(){
        return <input type="text" style={style} value={this.props.username} />
    }

}