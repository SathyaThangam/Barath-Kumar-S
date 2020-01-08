import React from 'react';
import {connect} from 'react-redux'
import 'material-design-icons'
import axios from 'axios';

class Favourite extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cards : []
        }
    }
    favclick=(mov)=>{
        axios.post('http://localhost:8080/favourites/remove',{
                    userid : this.state.user,
                    movie : mov,
                })
                    .then(res => {
                        const removefav = { type: 'DELETE_FAVOURITE', favourites: mov };
                        this.props.dispatch(removefav)
                })
    }
   
    render(){
        console.log(this.props.favourites);
        return(
        <div style={{display : this.props.show ? 'block' : 'none'}}>
            <h1 >Favourites</h1>
            <div className="movie-list">

                {/* {this.state.cards} */}
                {this.props.favourites.map((mov) => {
                        // debugger;
                        // console.log(`Favourites ->`, this.props.favourites.includes(mov))
                        return (
                            <div id="movie-card" style={{ background: `url(${mov.Poster})` }} >
                                    <button onClick={() => this.favclick(mov)}><i className={"material-icons icon " + `${this.props.favourites.includes(mov) ? 'red' : 'white'}` } id="fav" title="favorites">favorite</i></button>
                                    <div id="info"> 
                                        <div id="title">{mov.Title}</div>
                                        <div id="year">Year : {mov.Year}</div>
                                        <div id="type">Type : {mov.Type}</div>
                                    </div>
                            </div >
                        )
                    })}
            </div>    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        favourites : state.favourites
    }
} 

export default connect(mapStateToProps)(Favourite);