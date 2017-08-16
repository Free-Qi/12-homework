/**
 * Created by dllo on 17/8/16.
 */
import React,{Component} from 'react';
import './totle.css'
class H3 extends Component{
    render(){
        return(
            <div id="user">
                <h1>用户~&nbsp;&nbsp;  {this.props.value}  &nbsp;&nbsp;~已登录</h1>
                <button onClick={this.props.click}>退出</button>
            </div>
        )
    }
}
export default H3