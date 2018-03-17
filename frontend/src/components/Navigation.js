import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
     <header className="header_sticky">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-6">
						<h1><a href="#" title="SLIPPS">SLIPPS</a></h1>
				</div>
				<nav className="col-lg-9 col-6">
				<a class="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="#0"><span>Menu mobile</span></a>
					<div className="main-menu">
						<ul>
							<li><a href="#">Login</a></li>
							<li><a href="#0" >Register</a></li>
							<li><a href="#0" ><b>ENG</b></a></li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</header>   
    );
  }
}

export default Navigation;