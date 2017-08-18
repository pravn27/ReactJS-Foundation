import React, { Component } from 'react';
import SearchForm from './SearchForm';

export default class SearchHeading extends Component{
    render(){
        return(
            <ul className="vertical menu accordion-menu" data-accordion-menu>
                <li>
                    <a>Search</a>
                    <ul className="menu vertical nested">
                       <SearchForm/>
                    </ul>
                </li>    
            </ul>
        );
    }
}