import React from 'react';
import 'App.css';
import Counter from 'Counter';
import Message from 'Message';
import Profile from 'Profile';
// import TodoList from 'TodoList';
// props
// import 'antd/dist/antd.css';이렇게 해도됨 

class App extends React.Component{
    render(){
        return(
            <div>
                <Profile/>
                <Message/>


                <Counter color ="green"/>
                <Counter/>
                <Counter color ="blue"/>


            </div>
        );
    }

}

export default App;