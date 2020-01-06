import React from 'react';
import {connect} from 'react-redux'
import 'material-design-icons'


class Watchlist extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            cards : []
        }
    }

    watchclick=(mov)=>{
        mov["watchcolor"] = "white";
        const removewatch={type : 'DELETE_WATCHLIST' , watchlist : mov};
        this.props.dispatch(removewatch)
    } 

    // componentWillMount=()=>{
    //     let cards = this.props.watchlist.map((mov) => {
    //         return (
    //             <div id="movie-card" style={{ background : `url(${mov.Poster})`}} >
    //                 <button onClick={()=>this.watchclick(mov)}><i class={"material-icons icon " + `${this.props.watchlist.includes(mov) ? 'red' : 'white'}`}  id="watch" title="watchlist">list</i></button>
    //     <div id="info">
    //     <div id="title">{mov.Title}</div>
    //         <div id="year">Year : {mov.Year}</div>
    //     <div id="type">Type : {mov.Type}</div>
    //     </div>
    //     </div >
    //     )})   
    //     this.setState({...this.state,cards})
    // }

    render(){
    return(
        <div style={{display : this.props.show ? 'block' : 'none'}}>
            <h1>Watchlist</h1>
            <div class="movie-list">
                {/* {this.state.cards} */}
                {this.props.watchlist.map((mov) => {
                        // debugger;
                        // console.log(`Favourites ->`, this.props.favourites.includes(mov))
                        return (
                            <div id="movie-card" style={{ background: `url(${mov.Poster})` }} >
                                    <button onClick={() => this.watchclick(mov)}><i className={"material-icons icon " + `${this.props.watchlist.includes(mov) ? 'red' : 'white'}` } id="watch" title="watchlist">list</i></button>
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

const mapStateToProps = (state) => {
    return{
        watchlist : state.watchlist
    }
} 

export default connect(mapStateToProps)(Watchlist);