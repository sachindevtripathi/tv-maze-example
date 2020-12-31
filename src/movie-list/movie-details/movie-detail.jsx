import React, { useState } from 'react';

function MovieDetail(props){

    const [ isExpanded, setIsExpended] = useState();
    
    return(
        <li className="list-group-item" key={props.index}>
            
            <div style={{display: isExpanded? 'none': 'block'}}>
                <div style={{height: '50px', width: '60px', display: 'inline-block'}}>
                    <img src={props.show.image ? props.show.image.medium : ''} alt=""  height="50px" width="50px" /> 
                </div>            
                <span className="list-title"> {props.show.name}</span>
                <button className="btn btn-dark float-right" onClick={()=>{setIsExpended(!isExpanded)}}><icon>+</icon></button>
            </div>
           
            <div style={{display: !isExpanded? 'none': 'block'}}>  
                <button className="btn btn-dark float-right" onClick={()=>{setIsExpended(!isExpanded)}}>
                    <span style={{fontSize: '20px', color: 'white'}}>-</span>
                </button>               
                <div className="float-left">
                    <img src={props.show.image ? props.show.image.original : ''} alt=""  height="
                    250px" width="200px" />                      
                </div> 
                
                <div className="float-none ml-1">
                    <div className="list-title">  <label className="px-2">Movie name: </label> {props.show.name}</div>                   
                    <div className="list-title">  <label className="px-2">Status: </label>  {props.show.status}</div>
                    <div className="list-title">  <label className="px-2">Type: </label> {props.show.type}</div>
                    <div className="list-title">  <label className="px-2">URL: </label> {props.show.url}</div>
                    <div className="list-title">  <label className="px-2">Official Site: </label> {props.show.officialSite}</div>
                    <div className="list-title">  <label className="px-2">Language: </label> {props.show.language}</div>
                    <div className="list-title">  <label className="px-2">Genres: </label> {props.show.genres}</div>
                    <div className="list-title">  <label className="px-2">Premiered: </label> {props.show.premiered}</div>
                    <div className="list-title">  <label className="px-2">Rating: </label> {props.show.rating.average}</div> 
                                       
                </div>     
                <div className="d-inline float-right" dangerouslySetInnerHTML={{__html:props.show.summary}}></div>  
                 
                   
                
            </div>
           
           
        </li>
    )
}
export default MovieDetail