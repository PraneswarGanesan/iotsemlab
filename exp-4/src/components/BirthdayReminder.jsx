import { useState } from "react";
import "./BirthdayReminder.css";

function BirthdayReminder() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [birthday, setBirthday] = useState("");

  const addPerson = () => {
    if (!name || !photo || !birthday) {
      alert("Please fill all fields");
      return;
    }

    const newPerson = { name, photo, birthday };
    setPeople([...people, newPerson]);
    setName("");
    setPhoto("");
    setBirthday("");
  };

  const checkBirthdays = () => {
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth();

    const birthdaysToday = people.filter((p) => {
      const date = new Date(p.birthday);
      return date.getDate() === todayDay && date.getMonth() === todayMonth;
    });

    if (birthdaysToday.length > 0) {
      birthdaysToday.forEach((p) =>
        alert(`🎉 Happy Birthday, ${p.name}!`)
      );
    } else {
      alert("No birthdays today!");
    }
  };

  return (
    <div className="birthday-app">
      <h2>🎂 Birthday Reminder</h2>

      <div className="form">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <button onClick={addPerson}>Add Person</button>
      </div>

      <div className="people-list">
        {people.map((p, i) => (
          <div key={i} className="person-card">
            <img src={p.photo} alt={p.name} />
            <div>
              <p><strong>{p.name}</strong></p>
              <p>{p.birthday}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="check-btn" onClick={checkBirthdays}>
        Check Birthdays
      </button>
    </div>
  );
}

export default BirthdayReminder;
