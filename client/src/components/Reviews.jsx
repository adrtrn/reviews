import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import ReviewsHeader from './ReviewsHeader.jsx';
import { render } from 'enzyme';

// function Reviews(props) {
class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starAvg: 0.0,
      reviewsCount: 0
    };
    this.updateStats = this.updateStats.bind(this);
  }

  updateStats(stats) {
    this.setState(stats);
  }

  render() {
    let myArray = this.props.reviews;
    
    console.log(this.props.reviews.length);

    return (
      <div className="Reviews">
        <ReviewsHeader stats={this.props.stats} />
        {this.props.reviews.slice(0, 6).map(r => <ReviewEntry review={r} />)}
      </div>
    );
  }
};

export default Reviews;

