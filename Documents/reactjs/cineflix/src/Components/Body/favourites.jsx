import React from 'react';
import {connect} from 'react-redux'
import 'material-design-icons'


class Favourite extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cards : []
        }
    }
    favclick=(mov)=>{
        mov["favcolor"] = "white";
        const removefav={type : 'DELETE_FAVOURITE' , favourites : mov};
        this.props.dispatch(removefav)
    }
    
    // componentDidMount=()=> {
    //     let cards = this.props.favourites.map((mov) => {
    //         return (
    //             <div key={mov.imdbID} id="movie-card" style={{ background : `url(${mov.Poster})`}} >
    //                 <button onClick={()=>this.favclick(mov)}><i class={"material-icons icon " + `${this.props.favourites.includes(mov) ? 'red' : 'white'}`} id="fav" title="favorites">favorite</i></button>
    //     <div id="info">
    //     <div id="title">{mov.Title}</div>
    //         <div id="year">Year : {mov.Year}</div>
    //     <div id="type">Type : {mov.Type}</div>
    //     </div>
    //     </div >
    //     )})
    //     this.setState({ cards })
    // };
    render(){
        return(
        <div style={{display : this.props.show ? 'block' : 'none'}}>
            <h1 >Favourites</h1>
            <div class="movie-list">
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