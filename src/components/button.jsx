/**
 * Created by xinsw on 2016/1/8.
 */

import React from 'react'
import '../resource/style/style.scss'


export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
        // Bind callback methods to make `this` the correct context.
        this.handleClick = this.handleClick.bind(this);
    }

    getInitialState() {
        return {liked: false};
    }

    handleClick(event) {
        this.setState({liked: !this.state.liked});
    }

    render() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';

        return <p onClick={this.handleClick}>
            You {text} this. Click to toggle.
        </p>;
    };
}