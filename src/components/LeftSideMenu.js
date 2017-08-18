import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LeftSideMenu extends Component{
    render(){
        return(
            <ul className="vertical menu accordion-menu" data-multi-open='false' data-accordion-menu>
                <li>
                    <a style={styles.main} href="#">Find Summary</a>
                    <ul style={styles.sub} className="menu vertical nested is-active">
                        <li style={styles.Subitem}><a style={styles.anchor} href="#">Item 1A</a></li>
                        <li style={styles.Subitem}><a style={styles.anchor} href="#">Item 1B</a></li>
                    </ul>
                </li>
                <li>
                    <a style={styles.main} href="#">Item 2</a>
                    <ul style={styles.sub} className="menu vertical nested">
                        <li style={styles.Subitem}><a style={styles.anchor} href="#">Item 1A</a></li>
                        <li style={styles.Subitem}><a style={styles.anchor} href="#">Item 1B</a></li>
                    </ul>
                </li>
            </ul>
        )
    }
}

const styles = {
    main: {
        background: 'aliceblue',
    },
    sub: {
        background: 'rgb(23, 121, 186)',
        marginLeft: '0rem'
    },
    anchor: {
        color: 'white'
    },
    Subitem: {
        paddingLeft: '6%',
        borderBottom: '1px Solid lightslategray'
    }
}

export default LeftSideMenu;