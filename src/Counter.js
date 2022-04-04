import React from "react";
// import PropTypes from "prop-types"


class Counter extends React.Component{
    static defaultProps ={
        color:'red',
    }
    // static propTypes = {
    //     color:this.propTypes.string,
    // }
    state ={
        value:0,
        color:this.props.color,
    }


    onClick=()=>{
      this.setState(({value:prevValue}) => ({
          value :prevValue+1
      }))
    }
    onContextMenu=(e)=>{
        e.preventDefault();
        this.setState(({value:prevValue}) => ({
            value :(prevValue >= 1 ? prevValue-1 : 0 ),
        }))
    }

    render(){
        const {value,color} = this.state;
        return(
            <div onClick={this.onClick}
                onContextMenu = {this.onContextMenu}
                 style={  {...style,backgroundColor:color}    }>
                {/* {this.state.value} */}
                {value}
            </div>
        )
    }
}

const style = {
    width:'100px',
    height:'100px',
    display:'inline-block',
    
    borderRadius:'50px',
    textAlign:'center',
    lineHeight:'100px',
    userSelect:'none',
    fontSize:'3rem',
    margin:'1rem',
    
}

export default Counter;