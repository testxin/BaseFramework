/**
 * Created by xinsw on 2016/1/8.
 */

import React from 'react'
import ProfileName from './profileName.jsx'
import ProfilePic from './ProfilePic.jsx'
import '../resource/style/style.scss'

export default class Profile extends React.Component {
    render() {
        return <div>
            <ProfilePic imgUrl={this.props.imgUrl}/>
            <ProfileName username={this.props.username}/>
        </div>
    }

}