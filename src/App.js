// App js
import axios from 'axios'
import { Component } from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import Repo from './components/Repo';

class App extends Component {
constructor(props){
    super(props);
    this.state={
    inpt:'',
    repotitle:'',
    warning:'',
    fullName:'', userName:'', location:'',emailAddresses:'',
    resultInfo:[], 
    resultRepos:[],
    clientId:'a8195590d19ebc04fe36',
    clientSecret:'03f3b8a5e1e76719dcb396cd4a07ccda1671acb4'
        }
    }
    
    userOnclick=(e)=>{
        e.preventDefault();
        const{inpt,clientId,clientSecret}=this.state
        inpt===''  
            ? this.setState({warning:`please don't leave empty`}) 
            // for the info request            
            :axios.get(`https://api.github.com/users/${inpt}?client_id=${clientId}&client_secret=${clientSecret}&sort=created`)
            .then(res=>{ this.setState({ 
                resultInfo:res.data,
                fullName:'Fullname:',
                userName:'Username:',
                location:'Location:',
                emailAddresses:'Email Addresses:'
            })
                    })
                .catch(err=>{ 
                    console.log( 'err',err )})
            // for the repository request
            axios.get(`https://api.github.com/users/${inpt}/repos?client_id=${clientId}&client_secret=${clientSecret}&sort=created`)
                .then(repos=>{ this.setState({
                    resultRepos:repos.data,
                    repotitle:'Repositories'}
                    )})
                .catch( err=>console.log ( err ))                
            }
    userOntype=(x)=>{
        this.setState({
        [x.target.name]:x.target.value })    
            this.setState({warning:''})
        }
        //render it
    render(){
    return (
        <div className="App">
        <UserInfo  userOnclick={this.userOnclick} warning={this.state.warning} inpt={this.state.inpt}
                    resultInfo={this.state.resultInfo} userOntype={this.userOntype} fullName={this.state.fullName} 
                    userName={this.state.userName} location={this.state.location} />

        <Repo resultRepos={this.state.resultRepos} repotitle={this.state.repotitle}/>
        </div>
            );
        }
}
export default App;

