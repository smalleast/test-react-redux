import './style.scss'
export default class extends React.PureComponent {
  state = {};
  static defaultProps = {
    text: 'Loading...'
  };


  render() {
    const {text, animating} = this.props;
    if (animating) {
      return (
        <div className="test-react-redux">
          <div className="test-react-redux-content">
            <div className="test-react-redux-hd"/>
            {
              text && <div className="test-react-redux-bd">{text}</div>
            }
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}
