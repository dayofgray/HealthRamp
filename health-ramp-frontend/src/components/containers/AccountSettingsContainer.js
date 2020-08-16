import React, {Component} from 'react'
import { connect } from 'react-redux';
import { setCurrentUser} from '../../actions/currentUser';
import AccountForm from '../presentational/AccountForm';

class AccountSettingsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            accountForm: {
                email: '',
                name: ''
            }
        }
    }

    handleFormChange = event => {
        const {name, value} = event.target
        this.setState((prevState) => {
            return {
                accountForm: {
                    ...prevState.accountForm,
                    [name]: value
                }   
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const id = this.props.currentUser.id
        fetch(`http://localhost:3001/api/v1/users/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(this.state.accountForm)
          })
          .then(resp => resp.json())
          .then(json => {
              if (json.data){
                  this.props.setCurrentUser(json.data.attributes)
                  alert("You have updated your settings!")
              } else {
                  console.log(json[0])
              }
          })
          .catch(console.log)
    }

    componentDidMount(){
        let accountForm = Object.assign({}, this.props.currentUser)
        delete accountForm.id
        this.setState({
            accountForm
        })
    }

    render() {
        return(
        <AccountForm handleSubmit={this.handleSubmit} handleFormChange={this.handleFormChange} accountForm={this.state.accountForm}/>
        )
    }
    


}
export default connect(null, {setCurrentUser})(AccountSettingsContainer)