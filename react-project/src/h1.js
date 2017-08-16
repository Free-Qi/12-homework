/**
 * Created by dllo on 17/8/16.
 */
import React,{Component} from 'react';
import './totle.css'
class H1 extends Component{
    render(){
        return(
            <div id="nologin">
                <h1>未登录</h1>
                <button onClick={this.props.click}>登录</button>
            </div>
        )
    }
}
export default H1;