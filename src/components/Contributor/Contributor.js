import s from 'Contributor/Contributor.scss'

export default class Contributor extends React.Component {
  static propTypes = {
    contributor: React.PropTypes.object.isRequired,
  }

  render() {
    const {
      contributor
    } = this.props;

    return (
      <div className="contributorContainer">
        <div
          className="contributorImage"
          style={{backgroundImage: `url(${contributor.photo})`}}
        >
        </div>
        <div className="contributorName">
          {contributor.firstName} {contributor.lastName}
        </div>
      </div>
    )
  }
}
