import RecurringDatePicker from '../app/component/RecurringDatePicker';
import '../app/style/globals.css'; // Adjust the path as needed
import '../app/style/mainclass.css';


export default function Home() {
  return (
    <main className="outer">
    <h1>Welcome to My Recurring Date Picker</h1>
    <RecurringDatePicker />
  </main>
  
  );
}
