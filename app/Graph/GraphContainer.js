import React, { Component, PropTypes } from 'react';
import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';

/* Data is array of objects like this:
{
  "COUNTY": "Alameda",
  "YEAR": 2000,
  "TOTAL": 1453078,
  "WHITE": 607009,
  "HISPANIC": 275632,
  "ASIAN": 299159,
  "PACIFIC_ISLANDER": 9228,
  "BLACK": 215010,
  "AMERICAN_INDIAN": 5513,
  "MULTIRACE": 41527,
  "WHITE_%": "41.7740135078778%",
  "HISPANIC_%": "18.9688371856156%",
  "ASIAN_%": "20.5879519199933%",
  "PACIFIC_ISLANDER_%": "0.63506570191001%",
  "BLACK_%": "14.7968656878708%",
  "AMERICAN_INDIAN_%": "0.37940151870719%",
  "MULTIRACE_%": "2.85786447802527%"
}
*/

class GraphContainer extends Component {
  static propTypes = {
    countyData: PropTypes.array.isRequired,
    county: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <h3>{this.props.county} County {this.props.race} Population Percentage Projections 2000 - 2050</h3>
        <Graph
          countyData={this.props.countyData}
          race={this.props.race}
        />
      </div>
    );
  }
}

class Graph extends Component {
  static propTypes = {
    countyData: PropTypes.array.isRequired,
    race: PropTypes.string.isRequired,
  }

  makeHeight(item) {
    const percent = Number(item[this.props.race].split('%')[0]);
    return percent * 3;
  }

  render() {
    const graphDiv = ReactFauxDOM.createElement('div');

    d3.select(graphDiv)
        .style({
          'display': 'flex',
          'flex-direction': 'row',
        })
      .selectAll('div')
        .data(this.props.countyData)
      .enter()
      .append('div')
        .style({
          'background-color': 'steelblue',
          'margin': '2px',
          'height': (d) => this.makeHeight(d) + 'px',
          'width': '15px',
        });

    return graphDiv.toReact();
  }
}

export default GraphContainer;
