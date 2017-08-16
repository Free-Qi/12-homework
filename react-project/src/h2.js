/**
 * Created by dllo on 17/8/16.
 */
import React,{Component} from 'react';
import './totle.css'
class H2 extends Component{
    render(){
        return(
            <div id="logining">
                <form action="">
                    <div>
                        <label htmlFor="user">账号:</label>
                        <input type="text" id="user" onChange={this.props.change}/><br/>
                    </div>
                    <div>
                        <label htmlFor="pass">密码:</label>
                        <input type="password" id="pass"/><br/>
                    </div>

                </form>
                <button onClick={this.props.click}>登录</button>
            </div>
        )
    }
}
export default H2
