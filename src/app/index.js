import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchHeading from '../components/SearchHeading';
import LeftSideMenu from '../components/LeftSideMenu';

class App extends Component{
    render(){
        return(
            <div className="grid-x">
                <div className="small-12 medium-3 large-3 cell">
                    <LeftSideMenu/>
                </div>
                <div style={styles.SearchPart} className="small-12 medium-9 large-9 cell">
                    <SearchHeading/>
                </div>
            </div>
        )
    }
}

const styles = {
    SearchPart: {
        border: '1px solid lightsteelblue',
        borderRadius: '6px'
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root')
)