import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div>
      <PersonCard firstName="Son" lastName="Ming" age="26" hairColor="black"/>
      <PersonCard firstName="Son" lastName="Ming" age="26" hairColor="black"/>
    </div>
  );
  }
export default App;
  // handelAgeClick(e,idx){
  //   e.preventDefault();
  //   this.setState(prevState => {
  //     return {
  //       age: prevState.persons[idx].age ++
  //     }
  //   })
  // }

  // render(){
  //   return (
  //     <div className="App">
  //       {
  //         this.state.persons.map((p,idx) => {
  //           return <PersonCard 
  //                   firstName={p.firstName}
  //                   lastName={p.lastName}
  //                   age={p.age}
  //                   hairColor={p.hairColor}
  //                   key={idx}
  //                   idx={idx}
  //                   handleClick={this.handelAgeClick}
  //                   />
  //         })
  //       }
  //     </div>
  //   );
  // }


// }

