import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { SET_EVENT_ID } from "../constants/actionTypes";

const mapStateToProps = store => {
  return {
    currentUser: store.app.currentUser,
    eventId: store.event.eventId,
  };
};

const mapDispatchToProps = dispatch => ({
  // selectFullEvent: (payload) =>
  //   dispatch({ type: SELECT_FULL_EVENT, payload }),
  setEventId: (payload) =>
    dispatch({ type: SET_EVENT_ID, payload }),
});

// const tempResult = {"took":2,"timed_out":false,"_shards":{"total":5,"successful":5,"skipped":0,"failed":0},"hits":{"total":1,"max_score":null,"hits":[{"_index":"slipps","_type":"event","_id":"63","_score":2.9016657,"_source":{"why_relevant":"Ex homero possit delicatissimi mea, primis reprehendunt ad cum. Pri dicit paulo qualisque at, esse minimum invidunt eu vim. Ea elitr nominavi oportere quo, probo aliquip alterum ad nam. Te mea tollit noster. Sed putent facete docendi an, amet complectitur definitionem ius ne. Ea eos verear scaevola ullamcorper, ius ne modo iriure persius. Copiosae invidunt vix in, an praesent abhorreant contentiones usu.","country":{"name":"Sweden","code":"SE"},"@timestamp":"2018-04-16T07:31:56.685Z","keywords":[{"kw_pkey":41,"language_code":"en","category":"Social work (Children)","kw_id":41,"content":"Near miss"},{"kw_pkey":25,"language_code":"en","category":"Social work (Children)","kw_id":25,"content":"Healthcare Centre"},{"kw_pkey":6,"language_code":"en","category":"Social work (Children)","kw_id":6,"content":"Communication"},{"kw_pkey":4,"language_code":"en","category":"Social work (Children)","kw_id":4,"content":"Decision making"}],"@version":"1","description":"Quo ea duis invidunt prodesset. Quem assum aeterno ei mel, vidisse accumsan cu his, iusto philosophia ad per. Nam ex convenire interesset, eu mea apeirian expetendis, ea pri pertinax electram. Mel ea dico dignissim, velit aeterno nostrud sit ex.","created_at":"2018-04-04T18:17:45.061Z","language":{"name":"English","code":"en"},"id":63,"short_desc":"Quo ea duis invidunt prodesset. Quem assum aeterno ei mel, vidisse accumsan cu his, iusto philosophia ad per. Nam ex convenire interesset, eu mea apeirian expetendis, ea pri pertinax electram. Mel ea ...","title":"Quo ea duis invidunt prodesset. Quem assum aetern...","field_of_study":"Social work (Children)","details":[{"question_text":"if was harmful, reported?","answer_num":2,"answer_text":"Yes","question_pos":10,"question_id":11,"answer_id":80},{"question_text":"if was harmful, reported? - open","answer_num":null,"answer_text":null,"question_pos":11,"question_id":12,"answer_id":null},{"question_text":"if was harmful, documented?","answer_num":2,"answer_text":"Yes","question_pos":12,"question_id":13,"answer_id":85},{"question_text":"if was harmful, documented? - open","answer_num":null,"answer_text":null,"question_pos":13,"question_id":14,"answer_id":null}]},"sort":[2.9016657,63]}]}};
// const tempEvent= { "_index":"slipps", "_type":"event", "_id":"63", "_score":2.9016657, "_source":{ "why_relevant":"Ex homero possit delicatissimi mea, primis reprehendunt ad cum. Pri dicit paulo qualisque at, esse minimum invidunt eu vim. Ea elitr nominavi oportere quo, probo aliquip alterum ad nam. Te mea tollit noster. Sed putent facete docendi an, amet complectitur definitionem ius ne. Ea eos verear scaevola ullamcorper, ius ne modo iriure persius. Copiosae invidunt vix in, an praesent abhorreant contentiones usu.", "country":{ "name":"Sweden", "code":"SE" }, "@timestamp":"2018-04-16T07:31:56.685Z", "keywords":[ { "kw_pkey":41, "language_code":"en", "category":"Social work (Children)", "kw_id":41, "content":"Near miss" }, { "kw_pkey":25, "language_code":"en", "category":"Social work (Children)", "kw_id":25, "content":"Healthcare Centre" }, { "kw_pkey":6, "language_code":"en", "category":"Social work (Children)", "kw_id":6, "content":"Communication" }, { "kw_pkey":4, "language_code":"en", "category":"Social work (Children)", "kw_id":4, "content":"Decision making" } ], "@version":"1", "description":"Quo ea duis invidunt prodesset. Quem assum aeterno ei mel, vidisse accumsan cu his, iusto philosophia ad per. Nam ex convenire interesset, eu mea apeirian expetendis, ea pri pertinax electram. Mel ea dico dignissim, velit aeterno nostrud sit ex.", "created_at":"2018-04-04T18:17:45.061Z", "language":{ "name":"English", "code":"en" }, "id":63, "short_desc":"Quo ea duis invidunt prodesset. Quem assum aeterno ei mel, vidisse accumsan cu his, iusto philosophia ad per. Nam ex convenire interesset, eu mea apeirian expetendis, ea pri pertinax electram. Mel ea ...", "title":"Quo ea duis invidunt prodesset. Quem assum aetern...", "field_of_study":"Social work (Children)", "details":[ { "question_text":"if was harmful, reported?", "answer_num":2, "answer_text":"Yes", "question_pos":10, "question_id":11, "answer_id":80 }, { "question_text":"if was harmful, reported? - open", "answer_num":null, "answer_text":null, "question_pos":11, "question_id":12, "answer_id":null }, { "question_text":"if was harmful, documented?", "answer_num":2, "answer_text":"Yes", "question_pos":12, "question_id":13, "answer_id":85 }, { "question_text":"if was harmful, documented? - open", "answer_num":null, "answer_text":null, "question_pos":13, "question_id":14, "answer_id":null } ] }, "sort":[ 2.9016657, 63 ] } ;

class EventLarge extends Component {
  constructor(props){
    super(props);
    this.navigateToEvent = this.navigateToEvent.bind(this);

  }
  navigateToEvent(e) {
    e.preventDefault();

    let eventId = this.props.eventDetail._source.id;
    this.props.history.push(`/event/${eventId}`);
    this.props.setEventId({ eventId: eventId });


    //this.props.selectFullEvent(this.props.eventDetail);
    // this.props.selectFullEvent(tempEvent);
    // ////TODO REMOVEEEEEEEEEEEE
    // this.props.history.push({
    //   //pathname: "/event/"+this.props.eventDetail._id,
    //   pathname: "/event/"+tempEvent._id,
    //   state: {
    //     //eventDetail:this.props.eventDetail
    //     eventDetail:tempEvent

    //   }
    // });
    // if(this.props.eventDetail)
    // { 
    //   this.props.history.push({
    //     //pathname: "/event/"+this.props.eventDetail._id,
    //     pathname: "/event/"+this.props.tempEvent._id,
    //     state: {
    //       //eventDetail:this.props.eventDetail
    //       eventDetail:tempEvent

    //     }
    //   });
    // }
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

    return (
      <div className="strip_list wow fadeIn" style={{visibility:"visible"}}>
        <a href="#0" className="wish_bt">{detail.country.name}</a>
        <figure>
          <a href="#0"><span className="pe-7s-glasses" style={{fontSize:"77px"}}></span></a>
        </figure>
        <div onClick={this.navigateToEvent} style={{cursor:"pointer"}}>
          <small>{detail.language.name}</small>
          <h3>{detail.field_of_study}</h3>
          <p onClick={this.navigateToEvent} style={{fontWeight:"300",fontSize:"0.8em"}}>{detail.title}{description}</p>
          <span className="rating"><small>{detail.created_at}</small></span>
          <ul>
            {
              detail.keywords.map(function(name, index) {
                return <li key={ index }>{name.category}: {name.content}</li>;
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EventLarge));
