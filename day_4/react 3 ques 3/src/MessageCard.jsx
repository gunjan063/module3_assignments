function MessageCard({ title, message }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      borderRadius: "5px",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

export default MessageCard;
