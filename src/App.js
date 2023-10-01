import "./App.css";
import React from "react";
import Footer  from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
// const title = (
//   <h1 id="title">
//     Food Villa
//   </h1>
// );


function App() {
  
const [user, setUser] = useState({
  name: "tharu",
  email: "tharu@gmail.com"
})

  return (
    <Provider store={store}>
      {/**
       * Header
       * =>logo
       * =>navbar
       * =>Cart
       * Body
       * =>Search Bar
       * =>Restaurant List
       * =>Restaurant Card(many cards)
       *     =>Image
       *     =>Name
       *     =>Rating
       *     =>Cusins
       * Footer
       * =>Link
       * =>Contact Us */}
      <UserContext.Provider value={{
        user: user,
        setUser: setUser
      }}>
      <Header />
      <Outlet/>
      <Footer />
     </UserContext.Provider>
    </Provider>
  );
}






export default App;
