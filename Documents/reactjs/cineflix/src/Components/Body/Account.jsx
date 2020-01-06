import React, { useState } from 'react';
import {connect} from 'react-redux'
import Logo from '../img/Logo.png'
import { Link } from 'react-router-dom'
import app from '../auth/auth.js';
import { useHistory } from 'react-router-dom';
import './home.css'
import Favourite from './favourites'
import Watchlist from './watchlists'

function Account({favourites}){
    const history = useHistory()
    const [state, setstate] = useState({
        show1 : true,
        show2 : false
    })
    const showfav=()=>{
        setstate({show1:true,show2:false})
    }
    const showWatch=()=>{
        setstate({show1:false,show2:true})
    }

    return(
        <div>
        <nav className="nav-wrapper">
            <div className="container">
                <Link to='/' class="logo"><img id="logo" src={Logo}></img>Cineflix</Link>
                <button type="submit" onClick={() => app.auth().signOut()}>Signout</button>
                <button onClick={()=>history.goBack()}>Home</button>
            </div>
        </nav>
        <div>
            <nav className="tab-wrapper">
                <div onClick={() => showfav()} className="favourites-tab tabs">Favourites</div>
                <div onClick={() => showWatch()} className="watchlist-tab tabs">watchlist</div>
            </nav>
            <div className="tab-body">
                <Favourite show={state.show1}/>
                <Watchlist show={state.show2}/>
            </div>
        </div>
        </div>
        )
}

const mapStateToProps = (state) => {
    return{
        favourites : state.favourites
    }
}

export default connect(mapStateToProps)(Account);