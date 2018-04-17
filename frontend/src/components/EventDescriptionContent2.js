import React, { Component } from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";



const tempEvent= { "_index":"slipps", "_type":"event", "_id":"63", "_score":2.9016657, "_source":{ "why_relevant":"Ex homero possit delicatissimi mea, primis reprehendunt ad cum. Pri dicit paulo qualisque at, esse minimum invidunt eu vim. Ea elitr nominavi oportere quo, probo aliquip alterum ad nam. Te mea tollit noster. Sed putent facete docendi an, amet complectitur definitionem ius ne. Ea eos verear scaevola ullamcorper, ius ne modo iriure persius. Copiosae invidunt vix in, an praesent abhorreant contentiones usu.", "country":{ "name":"Sweden", "code":"SE" }, "@timestamp":"2018-04-16T07:31:56.685Z", "keywords":[ { "kw_pkey":41, "language_code":"en", "category":"Social work (Children)", "kw_id":41, "content":"Near miss" }, { "kw_pkey":25, "language_code":"en", "category":"Social work (Children)", "kw_id":25, "content":"Healthcare Centre" }, { "kw_pkey":6, "language_code":"en", "category":"Social work (Children)", "kw_id":6, "content":"Communication" }, { "kw_pkey":4, "language_code":"en", "category":"Social work (Children)", "kw_id":4, "content":"Decision making" } ], "@version":"1", "description":"Quo ea duis invidunt prodesset. Quem assum aeterno ei mel, vidisse accumsan cu his, iusto philosophia ad per. Nam ex convenire interesset, eu mea apeirian expetendis, ea pri pertinax electram. Mel ea dico dignissim, velit aeterno nostrud sit ex.", "created_at":"2018-04-04T18:17:45.061Z", "language":{ "name":"English", "code":"en" }, "id":63, "short_desc":"Quo ea duis invidunt prodesset. Quem assum aeterno ei mel, vidisse accumsan cu his, iusto philosophia ad per. Nam ex convenire interesset, eu mea apeirian expetendis, ea pri pertinax electram. Mel ea ...", "title":"Quo ea duis invidunt prodesset. Quem assum aetern...", "field_of_study":"Social work (Children)", "details":[ { "question_text":"if was harmful, reported?", "answer_num":2, "answer_text":"Yes", "question_pos":10, "question_id":11, "answer_id":80 }, { "question_text":"if was harmful, reported? - open", "answer_num":null, "answer_text":null, "question_pos":11, "question_id":12, "answer_id":null }, { "question_text":"if was harmful, documented?", "answer_num":2, "answer_text":"Yes", "question_pos":12, "question_id":13, "answer_id":85 }, { "question_text":"if was harmful, documented? - open", "answer_num":null, "answer_text":null, "question_pos":13, "question_id":14, "answer_id":null } ] }, "sort":[ 2.9016657, 63 ] } ;

const mapStateToProps = state => {
  // return {
  //   EventDetail: state.search.eventFull
  // };
};

class EventDescriptionContent2 extends Component {
  static defaultProps = {
    EventDetail: tempEvent 
  };
  constructor(props){
    super(props);
  }
  render() {
    var eventQuestions=null;
    var eventDescription=null;
    var errorMessage=(<h3>You need to login to access this area.</h3>);

    if(this.props.EventDetail._source.details){
      eventQuestions=this.props.EventDetail._source.details.map(function(item,index){
        return (
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
          </div>);
      });
    }

    if(this.props.EventDetail._source.description){
      eventDescription= (
        <div className="event-description">
          <div className="indent_title_in">
            <i className="pe-7s-news-paper"></i>
            <h3>Full Description of Incident</h3>
            <p>Personal information are anonymized in this text.</p>
          </div>
          <div className="wrapper_indent">
            <p>
              {this.props.EventDetail._source.description}
            </p>
          </div>
        </div>);
    }

    console.warn(this.props);
    return (
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
                  <h3> {this.props.EventDetail._source.title}</h3>
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
                          <small>{this.props.EventDetail._source.country.name}</small>
                          <h1 style={{fontWeight:"100"}}>{this.props.EventDetail._source.short_desc}</h1>
                          <span className="rating">
                            <small>{this.props.EventDetail._source.created_at}</small>
                            <a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="img/badges/badge_1.svg" width="15" height="15" alt=""/></a>
                          </span>
                          <ul className="statistic">
                            <li>{this.props.EventDetail._source.language.name}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
              
                    <hr/>
                    {!eventDescription?errorMessage:(<hr/>)}
                    {errorMessage}
                    {eventDescription}
                    <hr/>
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
                      {this.props.EventDetail._source.keywords.map(function(name, index){
                        //return <li key={ index }>{name.category}: {name.content}</li>;
                        return (
                          <li>
                            <div className="checkbox">
                              <label htmlFor="visit1" className="css-label"> {name.content} <strong style={{textTransform:"uppercase"}}>{name.language_code}</strong></label>
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
    );
  }
}

export default connect(mapStateToProps, null)(withRouter(EventDescriptionContent2));

