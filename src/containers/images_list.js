import React, { Component } from 'react';
import { connect } from 'react-redux';
//items [] media {m: *}
class ImagesList extends Component {
	constructor(props) {
		super(props);

		this.renderImages = this.renderImages.bind(this);
	}
	renderImages(tagData) {
		let source = `https://farm${tagData.farm}.staticflickr.com/${tagData.server}/${tagData.id}_${tagData.secret}.jpg`
			return (
				<li>
					<img src={source} alt={tagData.title} className="eachImage" />
				</li>
			);
	}
	render() {
		let allImages = this.props.images;
		return (
			<div className="container">
				<ul>
					{(allImages.length > 0) ?
						allImages[0].map(this.renderImages)
						:
						<div className="instructions">Retrieve Flickr images tagged with your search keyword(s).</div>
					}
				</ul>
			</div>
		);
	}
}

function mapStateToProps({ images }) {
	return { images };
}

export default connect(mapStateToProps)(ImagesList);