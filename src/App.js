import React from 'react';
import { Button } from 'antd';
import 'App.css';

// props
// import 'antd/dist/antd.css';이렇게 해도됨 

class Counter1 extends React.Component{
  state={
    value:this.props.initialValue, //속성값중에 inittal을 value란 이름으로 상태값만듬
  }

  onClick=()=>{
    const {value } = this.state
    this.setState({value:value+1})
  };

  render(){
    const {value} = this.state;
    return (<div>
      Counter1 : {value}
      <Button onClick={this.onClick}>+1</Button>
      </div> 
      );//jsx문법
  }
}


class FrulitComponent extends React.Component{
  render(){
    
    return (
      <div>
        <h1>좋아하는 과일</h1>
        <ul>
          {
            this.props.fruits.map((name,index)=>(
               <li key={index}>{name}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

function App() {
  const fruits = ["바나나","사과","달기"];
  return (
    <div >
      <Button type ="primary" onClick={ ()=> console.log("clicked") }>
        hello Antd
      </Button>
      <Counter1 initialValue={10}/>
      <FrulitComponent fruits={fruits} />
    </div>
  );
}

export default App;
