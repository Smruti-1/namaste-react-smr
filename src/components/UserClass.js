import React from "react";

class UserClass extends React.Component {
constructor(props){
    super(props);

this.state = {
    count : 0,
    count2: 1,
}

}
    render(){
        const {name, locaton} = this.props;
       const {count, count2 } = this.state;
        return(
            <div className="user-card">
 <h2> display 1st count from class : {count}</h2>
<button onClick={() => {
    this.setState({
        count: this.state.count + 1,
    })
}}>
    Increasse Count
</button>
        <h2> Name:{name}</h2>
        <h3> Contact: Smrutisakre@gmail.com</h3>
        <h3> Location: {locaton}</h3>
    </div>
        )
    }
}

export default UserClass;