import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css';

class Autocomplete extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="container-icon">
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    style={{ width: '100%' }}
                />
            </div>
        );
    }
}

export default Autocomplete;