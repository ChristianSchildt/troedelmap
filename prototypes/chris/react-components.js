class HeaderComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: "Willi",
            todos: ["Aufgabe 1", "Aufgabe 2"]
        }
        this.todoDone = this.todoDone.bind(this) // added
    }

    // added
    todoDone(index){
        this.setState((currentState) =>{
            return {
                todos: currentState.todos.filter((item, id) => id !== index)
            }
        })
    }

    render(){
        return (
            // modified
            <div className="wrapper">
                <h1 id={this.props.id}>Hello <ItalComponent name={this.state.name} /></h1>
                <ListComponent todos={this.state.todos} todoDone={this.todoDone} />
            </div>
        )
    }
}

function ItalComponent(props){
    return (
        <i>World, {props.name}!</i>
    )
}

class ListComponent extends React.Component{
    

    render(){
        // modified
        return (
            <ul>
                {this.props.todos.map((descr, index) => (
                    <li key={index}>
                        {descr} <button onClick={() => this.props.todoDone(index)}>Done</button>
                    </li>
                    )
                )}
            </ul>
        )
    }
}