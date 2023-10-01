import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

   componentDidMount() {
   this.timer = setInterval(() => {
      console.log("Hii");
  },1000)
    console.log("Component Mount");
    }
    
    componentDidUpdate() {
        console.log("Componenet Update");
    }

    componentWillUnmount() {
        console.log("Unmount");
       clearInterval(this.timer) 
    }


  render() {
    console.log("render");
    return (
      <div>
      </div>
    );
  }
}

export default ProfileClass;
