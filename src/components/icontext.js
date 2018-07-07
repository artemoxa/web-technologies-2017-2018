import React, { Component } from 'react';
import Icon from './Icon';

class Icontext extends React.Component {
    render(){
        let adata = this.props.udata;
        if(adata===null){
            adata='No data';
        }
        if(this.props.lin===1){
            return(
                <div className="Icontext">
                <Icon kart={this.props.ico}/>
                <a href={adata}>{adata}</a>
                </div>
            );
        }
        else {
            return(
                <div className="Icontext">
                <Icon kart={this.props.ico}/>
                <span>{adata}</span>
                </div>
            );
        }
    }
};

export default Icontext;