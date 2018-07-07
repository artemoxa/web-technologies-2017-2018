import React, {Component} from 'react';
import {connect} from 'react-redux';
import Menu from '../Menu';
class Followers extends React.Component {
  render(){
    return (
        <div>
            <div className="Search"></div>
                <div className="mainw">
                    <Menu/>
                    <div className="cont">
                    <h1>Followers</h1>
                        {(this.props.fol)&&(this.props.fol.length!==0)
                        ?this.props.fol.map((or, index) =>
                        <a key={index} className="companies" href={"https://github.com/"+or.login}>{or.login} </a>
                        )
                        :"No information!"}  
                    </div>
                </div>
        </div>
    );
  }
};

export default connect(
    state => ({
         fol: state.fol
     })
)(Followers);