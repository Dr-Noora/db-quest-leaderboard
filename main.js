import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LeaderboardApp() {
  const [teams, setTeams] = useState([
    { name: 'Team Alpha', score: 0 },
    { name: 'Team Beta', score: 0 },
  ]);
  const [newTeam, setNewTeam] = useState('');

  const updateScore = (index, delta) => {
    const updated = [...teams];
    updated[index].score += delta;
    setTeams(updated);
  };

  const addTeam = () => {
    if (newTeam.trim()) {
      setTeams([...teams, { name: newTeam.trim(), score: 0 }]);
      setNewTeam('');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">DB Quest Leaderboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {teams.map((team, index) => (
          <Card key={index} className="rounded-2xl shadow p-4">
            <CardContent>
              <h2 className="text-xl font-semibold">{team.name}</h2>
              <p className="text-2xl font-bold">{team.score} pts</p>
              <div className="mt-2 flex gap-2">
                <Button onClick={() => updateScore(index, 5)}>+5</Button>
                <Button onClick={() => updateScore(index, 10)}>+10</Button>
                <Button onClick={() => updateScore(index, -5)} variant="destructive">-5</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-4">
        <Input
          value={newTeam}
          onChange={(e) => setNewTeam(e.target.value)}
          placeholder="Enter new team name"
        />
        <Button onClick={addTeam}>Add Team</Button>
      </div>
    </div>
  );
}
