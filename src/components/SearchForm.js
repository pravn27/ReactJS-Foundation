import React, { Component } from 'react';

export default class SearchForm extends Component{
    render(){
        return(
            <form>
                <div className="grid-x grid-margin-x">
                    <div className="small-4 medium-4 cell">
                        <label>File Run Month/Year:*
                            <input type="date" placeholder=""/>
                        </label>
                    </div>
                    <div className="small-4 medium-4 cell">
                        <label>Trading Partner ID:*
                            <input type="text" value="2334225" placeholder="Enter ID"/>
                        </label>
                    </div>
                    <div className="small-4 medium-4 cell">
                        <label>Coverage Year:*
                            <input type="date" placeholder=""/>
                        </label>
                    </div>
                </div>
                <div className='grid-x grid-margin-x'>
                    <div className="small-8 medium-8 cell">
                        <label>Record Flag</label>
                        <input id="checkbox1" type="checkbox"/><label for="checkbox1">B</label>
                        <input id="checkbox2" type="checkbox"/><label for="checkbox2">A</label>
                        <input id="checkbox3" type="checkbox"/><label for="checkbox3">E</label>
                        <input id="checkbox3" type="checkbox"/><label for="checkbox3">E</label>
                        <input id="checkbox3" type="checkbox"/><label for="checkbox3">E</label>
                        <input id="checkbox3" type="checkbox"/><label for="checkbox3">E</label>
                        <input id="checkbox3" type="checkbox"/><label for="checkbox3">E</label>
                        <input id="checkbox3" type="checkbox"/><label for="checkbox3">E</label>
                    </div>
                    <div className="small-8 medium-8 cell">
                        <input id="checkbox1" type="checkbox"/><label for="checkbox1">B</label>
                        <input id="checkbox2" type="checkbox"/><label for="checkbox2">A</label>
                        <input id="checkbox3" type="checkbox"/><label for="checkbox3">E</label>
                        <input id="checkbox3" type="checkbox"/><label for="checkbox3">E</label>
                        <input id="checkbox3" type="checkbox"/><label for="checkbox3">E</label>
                        <input id="checkbox3" type="checkbox"/><label for="checkbox3">E</label>
                        <input id="checkbox3" type="checkbox"/><label for="checkbox3">E</label>
                        <input id="checkbox3" type="checkbox"/><label for="checkbox3">E</label>
                    </div>
                </div>
            </form>
        );
    }
}