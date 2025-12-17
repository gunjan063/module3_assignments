import MessageCard from "./messagecard";

function App() {
  return (
    <div>
      <h2>Messages</h2>

      <MessageCard 
        title="Welcome"
        message="Hello! This is first message."
      />

      <MessageCard 
        title="Reminder"
        message="Don't forget to complete yourwork!"
      />

      <MessageCard 
        title="Alert"
        message="Your session will expire soon."
      />

      <MessageCard 
        title="Congratulation"
        message="You have completed all tasks!"
      />
    </div>
  );
}

export default App;

