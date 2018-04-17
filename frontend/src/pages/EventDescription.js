import React, { Component } from "react";
// import SearchContainer from "../components/SearchContainer";
// import EventDescriptionContent from "../components/EventDescriptionContent";
// import EventSuggestions from "../components//EventSuggestions";
// import EventDescriptionContent2 from "../components/EventDescriptionContent2";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { GET_EVENT, SET_EVENT_ID } from "../constants/actionTypes";

import agent from "../agent";

const mapStateToProps = store => {
  return {
    currentUser: store.app.currentUser,
    isLoading: store.event.isLoading,
    eventId: store.event.eventId,
    eventObj: store.event.eventObj
  };
};

const mapDispatchToProps = dispatch => ({
  getEvent: (payload) =>
    dispatch({ type: GET_EVENT, payload }),
  setEventId: (payload) =>
    dispatch({ type: SET_EVENT_ID, payload }),
});

class EventDescription extends Component {
  constructor(props)
  {
    super(props);
    // var EventDetail=this.props.location.state.EventDetail;
  }

  componentWillMount() {
    let eventId = this.props.eventId || this.props.match.params.event_id;
    this.props.getEvent(Promise.all([agent.Common.getEvent(eventId)]));
    this.props.setEventId({ eventId: eventId });
  }

  render() {
    // var eventQuestions=null;
    // var eventDescription=null;
    // var whyRelevant=null;
    // var errorMessage=(<h3>You need to login to access this area.</h3>);

    if (!this.props.eventObj) {
      return (
        <div id="preloader" className="mm-slideout">
          <div data-loader="circle-side"></div>
        </div>
      );
    } else {
      const eventObj = this.props.eventObj.event;
      const questions = eventObj.questions || [];
      const noLoginMsg = this.props.currentUser ? (<hr />) : (<h3>Please login/signup to view full detail. </h3>);
      const eventQuestions = (
        questions.map(function(item, index) {
          return (
            <div className="with-background">
              <div className="event-question-section">
                <div className="indent_title_in">
                  <i className="pe-7s-check"></i>
                  <h3>{item.question_text}</h3>
                  <p>This question comes from questionaire.</p>
                </div>
                <div className="wrapper_indent">
                  <p>
                    {item.question_text}
                  </p>
                </div>
                <hr/>
              </div>
            </div>
          );
        })
      );

      const eventDescription = eventObj.description ? 
        (
          <div className="event-description">
            <div className="indent_title_in">
              <i className="pe-7s-news-paper"></i>
              <h3>Full Description of Incident</h3>
              <p>Personal information are anonymized in this text.</p>
            </div>
            <div className="wrapper_indent">
              <p>
                {eventObj.description}
              </p>
            </div>
            <hr/>
          </div>
        ) : (<div></div>);

      const whyRelevant = eventObj.why_relevant ? 
        (
          <div className="event-description">
            <div className="indent_title_in">
              <i className="pe-7s-attention"></i>
              <h3>Why Relevant?</h3>
              <p>Information about relevance of this learning event.</p>
            </div>
            <div className="wrapper_indent">
              <p>
                {eventObj.why_relevant}
              </p>
            </div>
            <hr/>
          </div>
        ) : (<div></div>);

      return (
        <div className="with-background">
          <div id="page">     
            <main>
              <div id="breadcrumb">
                <div className="container">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Category</a></li>
                    <li>Page active</li>
                  </ul>
                </div>
              </div>
              {/*<!-- /breadcrumb -->*/}

              <div className="container margin_60 event-title">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <nav id="secondary_nav">
                      <h3> {eventObj.title}</h3>
                    </nav>
                    <div id="section_1">
                      <div className="box_general_3">
                        <div className="profile">
                          <div className="row">
                            <div className="col-lg-3 col-md-3">
                              <figure>
                                <i className="pe-7s-notebook" style={{fontSize:"10em"}}> </i>
                              </figure>
                            </div>
                            <div className="col-lg-9 col-md-9">
                              <small>{eventObj.country.name}</small>
                              <h1 style={{fontWeight:"100"}}>{eventObj.short_desc}</h1>
                              <span className="rating">
                                <small>{eventObj.created_at}</small>
                                <a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt=""/></a>
                              </span>
                              <ul className="statistic">
                                <li>{eventObj.language.name}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                
                        {noLoginMsg}
                        <hr />
                        {whyRelevant}
                        {eventDescription}
                        {eventQuestions}

                      </div>
                      {/*<!-- /section_1 -->*/}
                    </div>
                  </div>
                  {/*<!-- /col -->*/}
                  <aside className="col-xl-4 col-lg-4" id="sidebar">
                    <div className="box_general_3 booking">
                      <form>
                        <div className="title">
                          <h3>Keywords</h3>
                          <small>List of keywords associated with this document</small>
                        </div>
                        <ul className="treatments clearfix">
                          { 
                            (eventObj.keywords || []).map(function(name, index) {
                              return (
                                <li>
                                  <div className="checkbox">
                                    <label htmlFor="visit1" className="css-label">
                                      {name.content}
                                      <strong style={{textTransform:"uppercase"}}>{name.language_code}</strong>
                                    </label>
                                  </div>
                                </li>
                              );
                            })
                          }
                        </ul>
                        <hr/>
                      </form>
                    </div>
                    {/*<!-- /box_general -->*/}
                  </aside>
                  {/*<!-- /asdide -->*/}

                </div>
                {/*<!-- /row -->*/}
              </div>
              {/*<!-- /container -->*/}
            </main>
            {/*<!-- /main -->*/}
          </div>
        </div>
      );

    // return (
    //   <div>
    //     <div style={{backgroundColor: "#F5F8FA"}}>
    //       {
    //         // {<EventDescriptionContent2 EventDetail={this.props.location.state.EventDetail} />}
            
    //       }
    //     </div>
    //   </div>
    // );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDescription);
