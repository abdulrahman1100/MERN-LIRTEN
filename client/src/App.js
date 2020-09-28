import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import StartAs from './components/Au/StartAs'
import HomePage from './components/landingPage/HomePage';
import HomeNavbar from './components/layout/HomeNavbar'
import MemberProfile from './components/profile/MemberProfile'
import Tasks from './components/showAll/showAllTask'
import Projects from './components/showAll/showAllProject'
import Courses from './components/showAll/showAllCourse'
import MasterClasses from './components/showAll/showAllMasterClass'
import TrainingPrograms from './components/showAll/showAllTrainingProgram'
import Members from './components/showAll/showAllMember'
import CoworkingSpaces from './components/showAll/showAllCoworkingSpace'
import ConsultancyAgencies from './components/showAll/showAllConsultancyAgency'
import EducationOrganizations from './components/showAll/showAllEducationalOrganization'
import Partners from './components/showAll/showAllPartner'
import UpdateMember from './components/Forms/UpdateMember'
import UpdatePartner from './components/Forms/UpdatePartner'
import updateMasterCLass from './components/actions/updateMasterCLass'
import updateTrainingProgram from './components/actions/traingingPrograme'
import TrainingProgramProfile from './components/actions/TrainingProgramProfile'
import TaskProfile from './testComponents/TaskProfile'
import History from './components/Forms/History'
import updateCo from './components/Forms/updateCo'
import Chatbot from './components/chat/ChatWindow'
import updateTask from './testComponents/TaskUpdate'
import updateProject from './testComponents/ProjectUpdate'
import CourseProfile from './testComponents/CourseProfile'
import MasterClassProfile from './testComponents/MasterClassProfile'
import createRoom from './components/Forms/CreateRoom.js'
import updateRoom from './components/Forms/updateRoom'
import RoomProfile from './components/actions/RoomProfile'
import WelcomPage from './components/welcomePage/welcomPage'
import Imageupload from './components/Forms/uploadimg'
import VerificationPage from './components/Forms/verification'
import ProjectProfile from './testComponents/ProjectProfile'
import AdminPage from './testComponents/AdminPage'
import Aboutus from './components/layout/About'
import Footer from './components/layout/Footer'
import Register from './components/Au/Register'
import { connect } from 'react-redux'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let getNavbar = this.props.auth.isAuthenticated && this.props.auth.user.emailVerified ? <HomeNavbar /> : <div></div>
    return (
      <div className="App"  >
        <Router>
          <div style={{ backgroundColor: "#2e2e2e", minHeight: '100vh', backgroundSize: 'cover' }}>
            {getNavbar}
            <Route exact path="/" component={WelcomPage} />
            <Route exact path="/adminPage" component={AdminPage} />
            <Route exact path="/startAs" component={StartAs} />
            <Route exact path="/aboutus" component={Aboutus} />
            <Route exact path="/verificationpage" component={VerificationPage} />
            <Route exact path="/uploadimg" component={Imageupload} />
            <Route exact path="/register2" component={Register} />
            <Route exact path="/homePage" component={HomePage} />
            <Route exact path="/users/:id" component={MemberProfile} />
            <Route exact path='/history' component={History}></Route>
            <Route exact path='/tasks' component={Tasks}></Route>
            <Route exact path='/projects' component={Projects}></Route>
            <Route exact path='/projects/:id' component={ProjectProfile} />
            <Route exact path='/updateTask/:id' component={updateTask}></Route>
            <Route exact path='/updateProject/:id' component={updateProject}></Route>
            <Route exact path="/createRoom/:id" component={createRoom} />
            <Route exact path="/updateTrainingProgram/:id" component={updateTrainingProgram} />
            <Route exact path="/updateCourse/:id" component={updateMasterCLass} />
            <Route exact path="/updateMasterCLass/:id" component={updateMasterCLass} />
            <Route exact path="/coWorkingSpaces/rooms/:id/:roomId" component={RoomProfile} />
            <Route exact path="/updateRoom/:roomId" component={updateRoom} />
            <Route exact path='/courses' component={Courses}></Route>
            <Route exact path='/masterClasses' component={MasterClasses}></Route>
            <Route exact path='/trainingPrograms' component={TrainingPrograms}></Route>
            <Route exact path='/members' component={Members}></Route>
            <Route exact path='/partners' component={Partners}></Route>
            <Route exact path='/consultancyAgencies' component={ConsultancyAgencies}></Route>
            <Route exact path='/educationOrganizations' component={EducationOrganizations}></Route>
            <Route exact path='/coworkingSpaces' component={CoworkingSpaces}></Route>
            <Route exact path="/tasks/:id" component={TaskProfile} />
            <Route exact path="/updateCo/:id" component={updateCo} />
            <Route exact path='/TrainingProgramProfile/:id' component={TrainingProgramProfile} />
            <Route exact path='/courses/:id' component={CourseProfile} />
            <Route exact path='/masterClasses/:id' component={MasterClassProfile} />
            <Route exact path="/updatedmember/:id" component={UpdateMember} />
            <Route exact path="/updatedpartner/:id" component={UpdatePartner} />
            <Route exact path="/chatbot" component={Chatbot} />
            {/* <Footer/> */}
          </div>
        </Router>
      </div>


    );

  }

}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {})(App);

