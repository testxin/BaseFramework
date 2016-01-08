/**
 * Created by xinsw on 2016/1/8.
 */

import React from 'react'
import '../resource/style/style.scss'

export default class ProfilePic extends React.Component {
    render(){
        return <img  className="headImage" src={this.props.imgUrl} />
    }

}