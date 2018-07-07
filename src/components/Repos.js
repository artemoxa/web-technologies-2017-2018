import React, {Component} from 'react';
import {connect} from 'react-redux';
import Menu from '../Menu';
class Repos extends React.Component {
  render(){
    return (
        <div>
            <div className="Search"></div>
            <div className="mainw">
                <Menu/>
                <div className="cont">
                <h1>Repositories</h1>
                    {(this.props.repo)&&(this.props.repo.length!==0)
                    ?this.props.repo.map((or, index) =>
                    <a key={index} className="companies">{or.name} </a>
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
         repo: state.repo
     })
)(Repos);