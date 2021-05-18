import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3> Reminders </h3>
      <br />
      <form>
        <label htmlFor="id">ID</label>
        <input name="id" placeholder="ID" />
        <label htmlFor="reminder">Reminder</label>
        <input name="reminder" placeholder="Reminder" />
        <label htmlFor="time">Time</label>
        <input name="time" placeholder="Time" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
