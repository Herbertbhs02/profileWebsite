import React, { Component } from 'react';
import '../Style/wikipedia/wikipedia.css'

class Wikipedia extends Component {

    constructor(props) {
      super(props)
    
      this.state = {first:'',
                    fdescription:'',
                    second:'',
                    sdescription:'',
                    third:'',
                    tdescription:'',
                    fourth:'',
                    fodescription:'',
                    fresult:''
         
      }
    }

    submit = ()=>{ 
                  const req = this.state.first
                  console.log(req)
               const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search='+req+'&namespace=0%7C4&limit=6&formatversion=2';

               fetch(url)
               .then(res => res.json())
               .then(data => { 
                   this.setState({ fresult: data[1][1],fdescription:data[2][1],
                                   second: data[1][2],sdescription:data[2][2],
                                   third: data[1][3],tdescription:data[2][3],
                                   first:''})
                  
                  
               });
                  }
                  change = (e)=>{ this.setState({first:e.target.value})}

    render() {
        return (
            <div className='wiki'>
                <h3>Wikipedia</h3><br/>
                <input
                        type="text"
                        placeholder="Search"
                        value={this.state.first}
                        onChange={this.change}
                        
                    /><input type='button' value='Submit' onClick={this.submit}/>
                   
                    <h2>{this.state.fresult}</h2>
                    <p>{this.state.fdescription.substring(0,200)}</p>
                    <hr/>
                    <h2>{this.state.second}</h2>
                    <p>{this.state.sdescription.substring(0,200)}</p>
                    <hr/>
                    <h2>{this.state.third}</h2>
                    <p>{this.state.tdescription.substring(0,200)}</p>
            </div>
        );
    }
}

export default Wikipedia;
