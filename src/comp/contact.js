import React, {Component} from "react";


class Contact extends Component{

	render() {
		return(
			<div className="contact">
			<img src={this.props.src} className="avatar" /><p>{this.props.prenom}{" "}{this.props.nom}</p>
			<p>{this.props.telephone}</p><p>{this.props.adresse}</p><button>sho</button>
			</div>
		);
	}
}

export default Contact;/,/ 