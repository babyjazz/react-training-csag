import React from 'react';
import {
    NavLink
} from 'react-router-dom';


export default class Sidebar extends React.Component {

    render() {
        return (
            <div className='sidebar'>
                <div className='content'>
                    <ul>
                        <NavLink exact to='' activeClassName='active'>
                            <li>Component One</li>
                        </NavLink>
                        <NavLink to='/two' activeClassName='active'>
                            <li>Component Two</li>
                        </NavLink>
                    </ul>
                    <img src="https://www.wallpapersin4k.org/wp-content/uploads/2017/04/Wallpaper-Big-Size-Download-3.jpg"
                        width="100px" height="100px" />
                </div>
            </div>
        )
    }
}
