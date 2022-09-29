import './App.css';
import QnA from './components/QnA/QnA';
import WorkoutZone from './components/WorkoutZone/WorkoutZone';


function App() {
  return (
    <div className='app'>
      <WorkoutZone></WorkoutZone>
      <QnA></QnA>
    </div>
  );
}

export default App;
