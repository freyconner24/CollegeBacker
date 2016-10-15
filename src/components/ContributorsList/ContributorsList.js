import s from 'ContributorsList/ContributorsList.scss'
import Contributor from 'Contributor/Contributor'

export default class ContributorsList extends React.Component {
  static propTypes = {
    contributors: React.PropTypes.array,
  }

  constructor(props) {
    super(props);
  }

  renderContributors() {
    return this.props.contributors.map((contributor, i) => {
      return (
        <Contributor
          key={i}
          contributor={contributor}
        />
      );
    })
  }

  renderContributions() {
    let uniqueContributions = {};
    return this.props.fund.contributions.map((contribution, i) => {
      const contributor = contribution.contributor;
      if(!uniqueContributions[contributor.id]) {
        uniqueContributions[contributor.id] = contribution;
        return (
          <Contributor
            key={i}
            contributor={contributor}
          />
        );
      }
    })
  }

  render() {
    var st = this.state;
    var pr = this.props;
    return (
      <div className="contributorsListContainer">
        <div className="pageTitle">
          Contributors
        </div>
        <div className="contributorsList">
          {this.renderContributors()}
        </div>

        <div className="pageTitle" style={{marginTop: 100}}>
          Unique Contributors
        </div>
        <div className="contributorsList">
          {this.renderContributions()}
        </div>
      </div>
    )
  }
}
