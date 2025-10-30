import { useState } from "react";
import "./VotingSystem.css"; // import external CSS

function VotingSystem() {
  const [candidates, setCandidates] = useState([]);
  const [newCandidate, setNewCandidate] = useState("");
  const [votes, setVotes] = useState({});
  const [electionActive, setElectionActive] = useState(false);

  const addCandidate = () => {
    if (newCandidate.trim() === "") return;
    setCandidates([...candidates, newCandidate]);
    setVotes({ ...votes, [newCandidate]: 0 });
    setNewCandidate("");
  };

  const startElection = () => {
    if (candidates.length === 0) return alert("Add candidates first");
    setElectionActive(true);
  };

  const stopElection = () => {
    setElectionActive(false);
  };

  const resetElection = () => {
    setCandidates([]);
    setVotes({});
    setElectionActive(false);
  };

  const handleVote = (name) => {
    if (!electionActive) return alert("Election not active");
    setVotes((prev) => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const winner =
    candidates.length > 0
      ? Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b))
      : null;

  return (
    <div className="voting-container">
      <h2>🗳️ Simple Voting System</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter candidate name"
          value={newCandidate}
          onChange={(e) => setNewCandidate(e.target.value)}
        />
        <button onClick={addCandidate}>Add Candidate</button>
      </div>

      <div className="control-buttons">
        <button onClick={startElection}>Start Election</button>
        <button onClick={stopElection}>Stop Election</button>
        <button onClick={resetElection}>Reset</button>
      </div>

      <h3 className="status">
        Status: {electionActive ? "Voting in progress" : "Stopped"}
      </h3>

      <div className="candidate-list">
        {candidates.map((name) => (
          <div className="candidate-card" key={name}>
            <p>
              {name}: {votes[name]} votes
            </p>
            <button onClick={() => handleVote(name)}>Vote</button>
          </div>
        ))}
      </div>

      {!electionActive && candidates.length > 0 && (
        <h3 className="winner">🏆 Winner: {winner}</h3>
      )}
    </div>
  );
}

export default VotingSystem;
