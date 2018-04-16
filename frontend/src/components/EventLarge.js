import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    currentUser: state.app.currentUser,
  };
};

class EventLarge extends Component {
  constructor(props){
    super(props);
    this.navigateToEvent = this.navigateToEvent.bind(this);
  }
  navigateToEvent() {
    if(this.props.eventDetail)
    { 
      this.props.history.push({
        pathname: "/event/"+this.props.eventDetail._id,
        state: {
          eventDetail:this.props.eventDetail
        }
      });
    }
  }
  render() {
    const star = this.props.currentUser ? (<i className="icon-star-empty"></i>) : (<i></i>);
    const detail = this.props.eventDetail ? this.props.eventDetail._source : {
      title: "Sample title",
      created_at: "12/04/2018",
      description: "This is a typical description",
      short_desc: "This is a short description",
      country: {
        name: "Finland"
      },
      language: {
        name: "English"
      },
      category: "",
      keywords: []
    };

    const description = this.props.currentUser ? detail.description : detail.short_desc;
    // return (
    //   <div className="box_general_3 booking" onClick={this.navigateToEvent}>					
    //     <div className="indent_title_in">
    //       {star}
    //       <h3>
    //         <a className="title">
    //           {
    //             detail.title
    //           }
    //         </a>
    //       </h3>
    //     </div>
    //     <div className="description">
    //       <p>
    //         {description}
    //       </p>
    //     </div>
    //     <p>Country: {detail.country.name}</p>
    //     <p>Category: {detail.field_of_study}</p>
    //     <p>Language: {detail.language.name}</p>
    //     <p className="event-created-at">{detail.created_at}</p>
    //     <ul>
    //       {
    //         detail.keywords.map(function(name, index){
    //           return <li key={ index }>{name.category}: {name.content}</li>;
    //         })
            
    //       }
    //     </ul>
    //   </div>
    // );


    return (
      <div class="strip_list wow fadeIn" style={{visibility:"visible"}}>
        <a href="#0" class="wish_bt">{detail.country.name}</a>
        <figure>
          <a href="detail-page.html"><span className="pe-7s-glasses" style={{fontSize:"77px"}}></span></a>
        </figure>
        <small>{detail.language.name}</small>
        <h3>{detail.field_of_study}</h3>
        <p style={{fontWeight:"300",fontSize:"0.8em"}}>{detail.title}{description}</p>
        <span class="rating"><small>{detail.created_at}</small></span>
        <ul>
          {
            detail.keywords.map(function(name, index){
              return <li key={ index }>{name.category}: {name.content}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(withRouter(EventLarge));
