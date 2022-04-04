import React from 'react';
import 'App.css';
import Counter from 'Counter';
// props
// import 'antd/dist/antd.css';이렇게 해도됨 

class App extends React.Component{
    render(){
        return(
            <div>
                <Counter color ="green"/>
                <Counter/>
                <Counter color ="blue"/>
            </div>
        );
    }

}

export default App;