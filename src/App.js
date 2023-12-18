import styles from  './App.module.scss';
import LogIn from './components/pages/logIn';
import SignUp from './components/pages/signup';
import { Link, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className={styles["App"]}>
      <div className={['links']} >
        <Link to='/login' className={styles['pagelink']} >Log In</Link>
        <Link to='/signup' className={styles['pagelink']} >Sign Up</Link>
      </div>
     <Routes>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
