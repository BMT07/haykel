import './App.css';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import About from './pages/About';
import SignUp from './components/SignUp/SignUp';
import Header from './components/SideBar/Header';
import Profile from './components/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from './Redux/actions/userActions';
import EditProfile from './components/EditProfile/EditProfile';
import { getAllAnnounces } from './Redux/actions/AnnouncementActions';
import AnnounceList from './components/AnnounceList/AnnounceList';
import AddAnnounce from './components/addAnnounce/AddAnnounce';
import EditAnnounce from './components/EditAnnounce/EditAnnounce';
import Details from './components/AnnounceDetails/Details';
import PrivateRoute from './components/Privates/PrivateRoute';
import UserList from './components/userList/UserList';
import swal from 'sweetalert';
import AddPrivate from './components/Privates/AddPrivate';
import ListUserPrivate from './components/Privates/ListUserPrivate';



function App() {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.userReducer.errors)
  const user = useSelector(state => state.userReducer.currentUser)


  setTimeout(() => {
    errors && swal("Oops", errors.response.data.msg, "error")
  }, 1);

  useEffect(() => {
    dispatch(getAllAnnounces());
    dispatch(getCurrentUser())
  }, [dispatch])


  return (

    <div>


      <Routes>
        <Route path='/' element={<div> <Navigation /> <About /> </div>} />
        <Route path='/signin' element={<div> <Navigation />  <SignIn /></div>} />
        <Route path='/signup' element={<div> <Navigation />  <SignUp /></div>} />

        <Route path='/home' element={<Header />} />
        <Route path='/profile' element={<div> <Header /> <PrivateRoute> <Profile /> </PrivateRoute> </div>} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/announcelist' element={<div> <Header /> <AnnounceList /> </div>} />
        <Route path='/addannounce' element={<AddPrivate>  <AddAnnounce /> </AddPrivate>} />
        <Route path='/editannounce/:id' element={<EditAnnounce />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/userlist' element={<div>  <ListUserPrivate user={user}> <UserList /> </ListUserPrivate>   </div>} />

      </Routes>
    </div>

  );
}

export default App;