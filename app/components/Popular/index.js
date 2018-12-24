var React = require('react');
var PropTypes = require('prop-types');
var api = require('../../utils/api');
var Loader = require('../Loader')

function SelectMenu (props) {
  var menuList = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='menuList'>
      {menuList.map(function (item) {
        return (
          <li className={item === props.selectedMenu?'active':null} onClick={props.updateMenu.bind(null, item)} key={item}> {item} </li>
        )
      })}
    </ul>
  )
}

function RepoGrid (props) {
    return (
      <ul className='popular-list'>
        {props.resp.map(function (respo, index) {
          return (
            <li key={respo.name} className='popular-item'>
              <div className='popular-rank'>#{index + 1}</div>
              <ul className='space-list-items'>
                <li>
                  <img className='avatar' src={respo.owner.avatar_url} alt={'Avatar for ' + respo.owner.login} />
                </li>
                <li><a href={respo.html_url}>{respo.name}</a></li>
                <li>@{respo.owner.login}</li>
                <li>{respo.stargazers_count} stars</li>
              </ul>
            </li>
          )
        })}
      </ul>
    )
  }
RepoGrid.propTypes = {
    resp: PropTypes.array.isRequired,
}

SelectMenu.propTypes = {
    selectedMenu: PropTypes.string.isRequired,
    updateMenu: PropTypes.func.isRequired,
};

class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
        selectedMenu: 'All',
      resp: null,
    };

    this.updateMenu = this.updateMenu.bind(this);
  }
  componentDidMount() {
    this.updateMenu(this.state.selectedMenu)
  }
  updateMenu(menuItem){
    this.setState(function(){
        return{
            selectedMenu: menuItem,
            resp: null
        }
    });

    api.fetchPopularRepos(menuItem).then(function(resp){
        this.setState(function(){
            return {resp : resp};
        })
    }.bind(this));
  }

  render() {
    return (
      <div>
        <SelectMenu selectedMenu={this.state.selectedMenu} updateMenu={this.updateMenu} />
        {!this.state.resp  ? <Loader/> : <RepoGrid resp={this.state.resp} />}
      </div>
    )
  }
}

module.exports = Popular;