import React, { Component, PropTypes } from 'react';
import DummyData from '../Graph/DummyData';
import GraphContainer from '../Graph/GraphContainer';

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

export default class HomeContainer extends Component {
  // Filter data array
  static filterData(field, value) {
    return DummyData.filter(item => item[field] === value);
  }
  // Returns array of counties in California
  static getCounties() {
    return DummyData
      .filter(item => item['YEAR'] === 2000)
      .map(item => item['COUNTY']);
  }
  // Return array of races
  static getRaces() {
    return [
      'WHITE_%',
      'HISPANIC_%',
      'ASIAN_%',
      'PACIFIC_ISLANDER_%',
      'BLACK_%',
      'AMERICAN_INDIAN_%',
      'MULTIRACE_%',
    ];
  }

  render() {
    return (
      <Home
        popData={DummyData
          .filter(item => item['COUNTY'] === 'Alameda')
          .map(item => Number(item))
        }
      />
    );
  }
}

class Home extends Component {
  static propTypes = {
    popData: PropTypes.array.isRequired,
  }

  state = {
    countyData: HomeContainer.filterData('COUNTY', 'Alameda'),
    counties: HomeContainer.getCounties(),
    selectedCounty: 'Alameda',
    races: HomeContainer.getRaces(),
    selectedRace: 'WHITE_%',
  }

  selectCounty(county) {
    this.setState({
      countyData: HomeContainer.filterData('COUNTY', county),
      selectedCounty: county,
    });
  }

  selectRace(race) {
    this.setState({selectedRace: race});
  }

  render() {
    return (
      <div>

        <div style={styles.selectionList}>
          {this.state.counties.map((county, i) => {
            return (
              <div
                key={i}
                onClick={() => this.selectCounty.bind(this)(county)}
                style={styles.county}
              >
                {county}
              </div>
            );
          })}
        </div>

        <div style={styles.selectionList}>
          {this.state.races.map((race, i) => {
            return (
              <div
                key={i}
                onClick={() => this.selectRace.bind(this)(race)}
                style={styles.county}
              >
                {race}
              </div>
            );
          })}
        </div>

        <GraphContainer
          countyData={this.state.countyData}
          county={this.state.selectedCounty}
          race={this.state.selectedRace}
        />

      </div>
    );

  }
}

const styles = {
  selectionList: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
  },

  county: {
    padding: '5px',
    fontWeight: 'bold',
    color: '#777'
  }
};
