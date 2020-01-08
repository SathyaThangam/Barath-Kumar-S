import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../img/Logo.png'
import Search from '../img/search.svg'
import Account from '../img/account.svg'
import app from '../auth/auth.js';
import './home.css'
import 'material-design-icons'
import { connect } from 'react-redux'
import axios from 'axios';
import { AuthContext } from '../auth/authDetail';

const mapStateToProps = (state) => {
    return {
        favourites: state.favourites,
        watchlist: state.watchlist,
        cards : state.cards,
        api:state.api,
    }
}

class Navbar extends React.Component {
    static contextType = AuthContext;
    
    constructor(props) {
        super(props);
        this.state = {
            user : "",
            error: "Search For Movies",
            search: "",
            cards : [],
        }
    }

    favclick = (mov) => {
        console.log(mov);
        let fav = false;
        if (this.props.favourites.length > 0) {
            for (let i = 0; i < this.props.favourites.length; i++)
                if (this.props.favourites[i].imdbID === mov.imdbID) { fav = true; }

            if (!(fav)) {
                //axios
                axios.post('http://localhost:8080/favourites/add',{
                    userid : this.state.user,
                    movie : mov,
                })
                    .then(res => {
                        
                    }) 
                    const addfav = { type: 'ADD_FAVOURITE', favourites: mov };
                    this.props.dispatch(addfav); 
            }
            else {
                //axios
                axios.post('http://localhost:8080/favourites/remove',{
                    userid : this.state.user,
                    movie : mov,
                })
                    .then(res => {
                        
                })
                const removefav = { type: 'DELETE_FAVOURITE', favourites: mov };
                this.props.dispatch(removefav)
            }
        }
        else {
            axios.post('http://localhost:8080/favourites/add',{
                    userid : this.state.user,
                    movie : mov,
                })
                    .then(res => {
                        const addfav = { type: 'ADD_FAVOURITE', favourites: mov };
                        this.props.dispatch(addfav);
                    })
        }
    }

    watchclick = (mov) => {
        let watch = false;
        if (this.props.watchlist.length > 0) {
            for (let i = 0; i < this.props.watchlist.length; i++)
                if (this.props.watchlist[i].imdbID === mov.imdbID) { watch = true }

            if (!(watch)) {
                //axios
                axios.post('http://localhost:8080/watchlist/add',{
                    userid : this.state.user,
                    movie : mov,
                })
                .then(res => {
                    const addwatch = { type: 'ADD_WATCHLIST', watchlist: mov };
                    this.props.dispatch(addwatch);
                })
                
            } else {
                //axios
                axios.post('http://localhost:8080/watchlist/remove',{
                    userid : this.state.user,
                    movie : mov,
                })
                .then(res => {
                    const removewatch = { type: 'DELETE_WATCHLIST', watchlist: mov };
                    this.props.dispatch(removewatch);
                })
                
            }
        }
        else {
            axios.post('http://localhost:8080/watchlist/add',{
                    userid : this.state.user,
                    movie : mov,
                })
                .then(res => {
                    const addwatch = { type: 'ADD_WATCHLIST', watchlist: mov };
                    this.props.dispatch(addwatch);
                })
        }
    }

    search = (e) => {
        e.preventDefault();
        if (this.state.search) {
            fetch(`http://www.omdbapi.com/?s=${this.state.search}&apikey=8fa47492`)
                .then(result => {
                    return result.json();
                }).then(data => {
                    const Cards = { type: 'CARDS', cards: data.Search };
                    this.props.dispatch(Cards);
                    this.setState({...this.state,cards: data.Search}); 
                }, [])
        } else {
            alert("Please Enter Something to search");
        }
    }
    componentDidMount = () =>{
        const user = this.context.currentUser.uid;
        this.setState({...this.state, user})
        if(!this.props.api)
        {
            //favourites-fetch
            axios.post('http://localhost:8080/favourites/show',{userid: user})
            .then(res =>{
                const favourites = { type : 'SHOW_FAVOURITE' , favourites : res.data}
                this.props.dispatch(favourites)
                // console.log('Favourites are :',res.data)
            })
            //watchlist-fetch
            axios.post('http://localhost:8080/watchlist/show',{userid: user})
            .then(res =>{
                const watchlist = { type : 'SHOW_WATCHLIST' , watchlist : res.data}
                this.props.dispatch(watchlist)
            })

            const api = { type : 'FETCHED'}
            this.props.dispatch(api);
        }
    }
    searchValue = (e) => {
        var searchval = e.target.value;
        this.setState({ ...this.state, search: searchval })
    }

    redirect = () => {
        let path = `account`;
        this.props.history.push(path);
    }
    
    render() {
        const isfavourite = (imdbID) =>{
            let fav = false;
            for(let i=0;i<this.props.favourites.length;i++)
            if(imdbID === this.props.favourites[i].imdbID) {fav = true }
            
            if(fav === true) {return true}
            else {return false}
        }
        const iswatchlist = (imdbID) =>{
            let fav = false;
            for(let i=0;i<this.props.watchlist.length;i++)
            if(imdbID === this.props.watchlist[i].imdbID) {fav = true }
            
            if(fav === true) {return true}
            else {return false}
        }
        return (
            <div>
                <nav className="nav-wrapper">
                    <div className="container">
                        <Link to='/' className="logo"><img id="logo" src={Logo}></img>Cineflix</Link>
                        <button type="submit" onClick={() => app.auth().signOut()}>Signout</button>
                        <button onClick={()=>this.redirect()}><img id="account-img" src={Account}></img>Account</button>
                        <button id="search-btn" type="submit" onClick={this.search}><img id="search-img" src={Search}></img></button>
                        <input type="text" placeholder="Search" id="search" onChange={this.searchValue}></input>
                    </div>
                </nav>
                <div className="movie-list">
                    {/* {this.state.cards} */}
                    {this.state.cards.map((mov) => {
                        return (
                            <div id="movie-card" style={{ background: `url(${mov.Poster})` }} >
                                    <button onClick={() => this.favclick(mov)}><i className={"material-icons icon " + `${isfavourite(mov.imdbID) ? 'red' : 'white'}` } id="fav" title="favorites">favorite</i></button>
                                    <button onClick={() => this.watchclick(mov)}><i className={"material-icons icon " + `${iswatchlist(mov.imdbID) ? 'red' : 'white'}` } id="watch" title="watchlist">list</i></button>
                                    <div id="info"> 
                                        <div id="title">{mov.Title}</div>
                                        <div id="year">Year : {mov.Year}</div>
                                        <div id="type">Type : {mov.Type}</div>
                                    </div>
                            </div >
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Navbar);