import React, { Component } from "react";

class AboutContent extends Component {
  render() {
    return (  
      <div>
        <div>
          <h5 className="about-title">Virtual Learning Centre (VLC)</h5>
          <p className="about-content">
             VLC is a platform developed to improve patient safety by enabling students and professionals in healthcare to share learning experiences. 
             It is a part of an Erasmus+ funded Patient Safety project with the same name. The platform supports basic functionality of a search engine 
             allowing users to discover various cases with the help of medical terms identified as ‘keywords’. The primary source of these experiences 
             are the practices conducted by healthcare students. Upon completion of practical tasks, students fill in questionnaires about their experience 
             as part of a survey. This survey is then reviewed and uploaded to the platform. These uploaded experiences are stored in the system as <strong>learning events. </strong>
             Users can register to upload new learning events and search for them by various criteria. This platform is developed to allow users to share their 
             own experiences in an effort to develop a virtual learning center which can become a source of information intended to provide patient safety across borders.
          </p>
        </div>
        <div>
          <h5 className="about-title">SLIPPS</h5>
          <p className="about-content"> 
            SLIPPS is responding to the challenge to improve European patient safety competence and education. Errors, mishaps and misunderstandings are common and around 1 in 10 patients suffer avoidable harm (WHO 2014). The majority of adverse care episodes and near misses are preventable (Vlayen et al 2012) and such incidents impact upon patients, their families, health care organisations, staff and students.
In health care programmes, learning takes place in both academic and work placement settings (Pearson et al 2009, 2010, Steven et al. 2014). When participating in clinical practice learning, student healthcare professionals may witness or be involved in patient safety incidents of varying degrees which are not always recognised, recorded or challenged (Steven et al 2014,  Kiesewetter et al 2014, Felstead 2013, Henneman et al. 2010). Thus a valuable source of information about patient safety incidents remains untapped and potential learning opportunities are lost.
Stronger collaboration is needed to improve the culture of safety in clinical teaching and learning settings (Tregunno et al. 2014) and to alleviate tensions between academic and work place contexts which may negatively impact upon student learning (Steven et al. 2014). 
          </p>
        </div>
        <div>
          <h5 className="about-title">Developers</h5>
          <p className="about-content">The project was developed within the framework of Running a Software Project discipline in Lappeenranta, Finland by <strong>PERCCOM</strong> Erasmus Mundus Master students</p>
        </div>
        <div className="container margin_20_35">
          <div className="row">
            <div className="col-lg-4">
              <div className="box_badges">
                <div id="badge_level_2" className="disabled_badge"><img src="img/badges/badge_3.svg" alt="" width="100" height="100"/></div>
                <h3>User 1</h3>
                <p>Lorem ipsum dolor sit amet, pro id zril molestie, cum ne omittam quaestio. Pri delectus conclusionemque te.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_badges">
                <div id="badge_level_2" className="disabled_badge"><img src="img/badges/badge_3.svg" alt="" width="100" height="100"/><i className="icon-lock"></i></div>
                <h3>User 2</h3>
                <p>Lorem ipsum dolor sit amet, pro id zril molestie, cum ne omittam quaestio. Pri delectus conclusionemque te.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_badges">
                <div id="badge_level_3" className="disabled_badge"><img src="img/badges/badge_3.svg" alt="" width="100" height="100"/><i className="icon-lock"></i></div>
                <h3>User 3</h3>
                <p>Lorem ipsum dolor sit amet, pro id zril molestie, cum ne omittam quaestio. Pri delectus conclusionemque te.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_badges">
                <div id="badge_level_3" className="disabled_badge"><img src="img/badges/badge_3.svg" alt="" width="100" height="100"/><i className="icon-lock"></i></div>
                <h3>User 4</h3>
                <p>Lorem ipsum dolor sit amet, pro id zril molestie, cum ne omittam quaestio. Pri delectus conclusionemque te.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_badges">
                <div id="badge_level_3" className="disabled_badge"><img src="img/badges/badge_3.svg" alt="" width="100" height="100"/><i className="icon-lock"></i></div>
                <h3>User 5</h3>
                <p>Lorem ipsum dolor sit amet, pro id zril molestie, cum ne omittam quaestio. Pri delectus conclusionemque te.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box_badges">
                <div id="badge_level_3" className="disabled_badge"><img src="img/badges/badge_3.svg" alt="" width="100" height="100"/><i className="icon-lock"></i></div>
                <h3>User 6</h3>
                <p>Lorem ipsum dolor sit amet, pro id zril molestie, cum ne omittam quaestio. Pri delectus conclusionemque te.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContent;
