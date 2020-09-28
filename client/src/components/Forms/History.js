import React, { Component } from 'react';
import axios from 'axios'
import '../../bootstrap.css'
import { Card } from 'react-bootstrap'
import HistoryCard from './HistoryCard';
import History from './save.png'
import { connect } from 'react-redux'

class HistoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    }
  }
  componentDidMount() {
    // console.log('here')
    const handle = this.props.auth.user._id
    axios
      .get(`https://hakunamatatasite.herokuapp.com/api/users/history/${handle}/`)
      .then(res => this.setState({ history: res.data.data }))


  }
  getHistory() {
    let array = []
    this.state.history.map((history) => (
      array.push(<HistoryCard key={history._id} history={history} ></HistoryCard>)


    ))
    return array
  }
  render() {
    // console.log('here')
    return (
      <div style={{
        backgroundColor: "#e5e8e8"
      }}>

        <div
          style={{ position: 'absolute', right: '400px' }} >
          <Card bsPrefix='Card' style={{ width: '800px', height: '80px', fontSize: '50px', borderRadius: '5px' }}>
            <Card.Img style={{ width: '80px', position: 'absolute', top: '-3px', right: '500px' }} src={History}></Card.Img>
            <Card.Body>
              <Card.Text style={{ position: 'absolute', right: '220px', top: '-3px', backgroundColor: 'transparent' }}>
                History
    </Card.Text>
            </Card.Body>
          </Card><br></br>
          {this.getHistory()}


        </div>
      </div>
    )
  }

}

const mapStateToProps =(state)=>({
  auth:state.auth,
  errors:state.errors,
  info:state.info
})

export default connect(mapStateToProps,{})(HistoryPage);
