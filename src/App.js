import './App.css';
import Sidebar from './component/sidebar';
import TasksCard from './component/tasksCard';
import Card from './component/card';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='Content'>
        <h1>Product Roadmap</h1>
        <div className='cardView'>
          <Card Code="Q1" Year = "2019" StartMonth = "January" EndMonth="March">
            <TasksCard title="Re-designed the zero-g doggie bags. No more spills!" persen="64"/>
            <TasksCard title="Travel & Relocation Support" persen="12"/>
          </Card>
          <Card Code="Q2" Year = "2019" StartMonth = "April" EndMonth="June"></Card>
          <Card Code="Q3" Year = "2019" StartMonth = "July" EndMonth="September">
            <TasksCard title="Bundle interplanetary analytics for improved transmission" persen="90"/>
          </Card>
          <Card Code="Q4" Year = "2019" StartMonth = "October" EndMonth="December">
            <TasksCard title="Data Migration: Performance & Culture End Game" persen="63"/>
          </Card>

        </div>
      </div>
    </div>
  );
}

export default App;
