class friendsContaine extends React.Component {
    render() {
        var name = "kiran Naram",
            family = ['kiran','tejaswini','nandu']
        return (
                <div>
                    <h3> Name: {name}</h3>
                    <showList names={family} />
                </div>)
    }
}


class showList extends React.Component {
    render() {
        return (
            <div>
                <h3>Friends</h3>
                <ul>
                    {this.props.names.map(function(famName){
                        <li>{famName}</li>
                    })}
                </ul>
            </div>
        )
    }
}