/**
 * Created by dllo on 17/8/16.
 */
import React,{Component} from 'react'
import H1 from './h1'
import H2 from './h2'
import H3 from './h3'
import './totle.css'

class All extends Component{
    constructor(props){
        super(props);
        this.state={
            html:'1',
            username:''
        }
    }
    click1=()=>{
        this.setState({
          html:'2'
        })
    };
    click2=()=>{
        this.setState({
            html:'3'
        })
    };
    click3=()=>{
        this.setState({
            html:'1'
        })
    };
    change=(e)=>{
        this.setState({
            username:e.target.value
        })
    };



    render(){
        let html = null;
        if(this.state.html==='1'){
         html=<H1 click={this.click1}/>
        }
        if(this.state.html==='2'){
            html=<H2 click={this.click2} change={this.change}/>
        }
        if(this.state.html==='3'){
            html=<H3 click={this.click3} value={this.state.username}/>
        }

        return(
            <div>
                {html}
            </div>
        )
    }

}
export default All