import React, { Component } from 'react';


class RecentEvents extends Component {
  render() {
    return (
		<div className="col-xl-8 col-lg-8">
		<div className="box_general_3 booking">
					<div className="title">
					<h3>Recent Learning Events</h3>
					</div>						
					<div className="indent_title_in">
						<i className="icon-star-empty"></i>
						<h3>This is an event title</h3>
						<p>March 2018</p>
					</div>
					<div className="wrapper_indent">
						<p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit... </p>
					</div>
					<hr></hr>
					<div className="indent_title_in">
						<i className="icon-star-empty"></i>
						<h3>This is an event title</h3>
						<p>March 2018</p>
					</div>
					<div className="wrapper_indent">
						<p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit...</p>
					</div>
			</div>
		</div>
    );
  }
}

export default RecentEvents;