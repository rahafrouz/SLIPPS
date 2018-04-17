import React, { Component } from "react";
import KeywordList from "./KeywordList";
import EventSummary from "./EventSummary";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    recentEvents: state.app.initData["recent_events"] || [],
  };
};

class MainPageNews extends Component {
  render() {
    const events = this.props.recentEvents.slice(0,3);
    return (
      <div>
        <div className="container margin_120_95">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <h4 className="box_title">Recent Events </h4>
              {
                (events && events.length > 0) ? 
                  (
                    <ul>
                      {
                        events.map((ev, ind) => {
                          return (
                            <EventSummary eventDetail={ev} />
                          );
                        })
                      }
                    </ul> ) : (<span className="message">No event to show</span>
                  )
              }
            </div>
            <div className="col-xl-4 col-lg-4">
              <h4 className="box_title">Popular Keywords</h4>
              <KeywordList />
            </div>
          </div>
        </div>
      </div>
  
    );
  }
}

export default connect(mapStateToProps, null)(MainPageNews);
