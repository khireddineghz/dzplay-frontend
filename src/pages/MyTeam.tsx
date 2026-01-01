import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import { useState } from "react";

// Test data for teams and players
const testTeams = [
  {
    id: 1,
    name: "CAB BATNA",
    badge: "🔴⚫",
    founded: "1932",
    stadium: "Stade 1er Novembre",
    players: [
      // Goalkeeper
      { id: 1, name: "Malik Asselah", position: "GK", overall: 90, pace: 58, shooting: 32, passing: 78, dribbling: 70, defending: 40, physical: 86, nationality: "DZ" },
      // Defenders
      { id: 2, name: "Amir Mandi", position: "CB", overall: 86, pace: 82, shooting: 42, passing: 68, dribbling: 70, defending: 89, physical: 88, nationality: "DZ" },
      { id: 3, name: "Raouf Benguit", position: "CB", overall: 85, pace: 84, shooting: 38, passing: 72, dribbling: 74, defending: 87, physical: 84, nationality: "DZ" },
      { id: 4, name: "Yacine Brahimi", position: "LB", overall: 82, pace: 92, shooting: 45, passing: 73, dribbling: 80, defending: 76, physical: 77, nationality: "DZ" },
      // Midfielders
      { id: 5, name: "Sofiane Bendebka", position: "CM", overall: 87, pace: 79, shooting: 70, passing: 86, dribbling: 88, defending: 76, physical: 82, nationality: "DZ" },
      { id: 6, name: "Haris Belkebla", position: "CM", overall: 88, pace: 77, shooting: 72, passing: 89, dribbling: 90, defending: 70, physical: 68, nationality: "DZ" },
      { id: 7, name: "Mehdi Abeid", position: "CM", overall: 84, pace: 80, shooting: 68, passing: 83, dribbling: 86, defending: 74, physical: 75, nationality: "DZ" },
      // Forwards
      { id: 8, name: "Baghdad Bounedjah", position: "ST", overall: 91, pace: 78, shooting: 92, passing: 79, dribbling: 86, defending: 44, physical: 82, nationality: "DZ" },
      { id: 9, name: "Youcef Belaïli", position: "RW", overall: 84, pace: 88, shooting: 82, passing: 80, dribbling: 87, defending: 38, physical: 75, nationality: "DZ" },
      { id: 10, name: "Islam Slimani", position: "LW", overall: 83, pace: 87, shooting: 81, passing: 76, dribbling: 84, defending: 42, physical: 72, nationality: "DZ" },
    ]
  },
  {
    id: 2,
    name: "JSM BATNA",
    badge: "💚⚪",
    founded: "1974",
    stadium: "Stade de Batna",
    players: [
      { id: 11, name: "Faouzi Chaouchi", position: "GK", overall: 89, pace: 55, shooting: 28, passing: 75, dribbling: 68, defending: 42, physical: 88, nationality: "DZ" },
      { id: 12, name: "Djamel Mesbah", position: "CB", overall: 85, pace: 81, shooting: 40, passing: 70, dribbling: 72, defending: 88, physical: 87, nationality: "DZ" },
      { id: 13, name: "Rafik Halliche", position: "CB", overall: 87, pace: 82, shooting: 41, passing: 71, dribbling: 70, defending: 90, physical: 89, nationality: "DZ" },
      { id: 14, name: "Farid Ghazi", position: "LB", overall: 84, pace: 90, shooting: 43, passing: 74, dribbling: 78, defending: 82, physical: 83, nationality: "DZ" },
      { id: 15, name: "Adlane Guedioura", position: "CM", overall: 88, pace: 74, shooting: 74, passing: 90, dribbling: 91, defending: 72, physical: 70, nationality: "DZ" },
      { id: 16, name: "Nabil Bentaleb", position: "CM", overall: 86, pace: 84, shooting: 79, passing: 82, dribbling: 84, defending: 78, physical: 85, nationality: "DZ" },
      { id: 17, name: "Zinedine Ferhat", position: "CM", overall: 84, pace: 85, shooting: 66, passing: 80, dribbling: 84, defending: 80, physical: 78, nationality: "DZ" },
      { id: 18, name: "Riyad Mahrez", position: "ST", overall: 91, pace: 79, shooting: 91, passing: 83, dribbling: 88, defending: 40, physical: 80, nationality: "DZ" },
      { id: 19, name: "Said Benrahma", position: "LW", overall: 89, pace: 95, shooting: 83, passing: 79, dribbling: 92, defending: 29, physical: 68, nationality: "DZ" },
      { id: 20, name: "Andy Delort", position: "RW", overall: 85, pace: 91, shooting: 81, passing: 78, dribbling: 88, defending: 36, physical: 66, nationality: "DZ" },
    ]
  },
  {
    id: 3,
    name: "USM BATNA",
    badge: "🔴⚪",
    founded: "1967",
    stadium: "Stade Seffouhi",
    players: [
      { id: 21, name: "Rais M'Bolhi", position: "GK", overall: 89, pace: 62, shooting: 35, passing: 85, dribbling: 82, defending: 38, physical: 87, nationality: "DZ" },
      { id: 22, name: "Aïssa Mandi", position: "CB", overall: 88, pace: 65, shooting: 39, passing: 73, dribbling: 70, defending: 91, physical: 88, nationality: "DZ" },
      { id: 23, name: "Mehdi Tahrat", position: "CB", overall: 86, pace: 68, shooting: 42, passing: 77, dribbling: 74, defending: 87, physical: 84, nationality: "DZ" },
      { id: 24, name: "Mohamed Fares", position: "LB", overall: 84, pace: 93, shooting: 48, passing: 75, dribbling: 78, defending: 80, physical: 82, nationality: "DZ" },
      { id: 25, name: "Ismael Bennacer", position: "CM", overall: 91, pace: 76, shooting: 86, passing: 93, dribbling: 88, defending: 64, physical: 78, nationality: "DZ" },
      { id: 26, name: "Ramiz Zerrouki", position: "CM", overall: 89, pace: 62, shooting: 72, passing: 87, dribbling: 82, defending: 87, physical: 86, nationality: "DZ" },
      { id: 27, name: "Adam Ounas", position: "CM", overall: 88, pace: 83, shooting: 79, passing: 86, dribbling: 92, defending: 68, physical: 73, nationality: "DZ" },
      { id: 28, name: "Mohamed Amoura", position: "ST", overall: 91, pace: 89, shooting: 92, passing: 65, dribbling: 80, defending: 45, physical: 88, nationality: "DZ" },
      { id: 29, name: "Amine Gouiri", position: "LW", overall: 84, pace: 82, shooting: 74, passing: 82, dribbling: 90, defending: 42, physical: 68, nationality: "DZ" },
      { id: 30, name: "Houssem Aouar", position: "RW", overall: 85, pace: 85, shooting: 80, passing: 83, dribbling: 90, defending: 56, physical: 70, nationality: "DZ" },
    ]
  }
];

// FIFA Card Component
function FifaCard({ player, onClick }: { player: any, onClick?: () => void }) {
  const getOverallColor = (overall: number) => {
    if (overall >= 90) return "from-yellow-600 to-yellow-500";
    if (overall >= 85) return "from-emerald-600 to-emerald-500";
    if (overall >= 80) return "from-blue-600 to-blue-500";
    return "from-slate-600 to-slate-500";
  };

  const getPositionColor = (position: string) => {
    if (position === "GK") return "bg-yellow-500";
    if (["CB", "LB", "RB"].includes(position)) return "bg-blue-500";
    if (["CM", "CDM", "CAM"].includes(position)) return "bg-green-500";
    return "bg-red-500";
  };

  // Convert country code to flag emoji
  const getFlagEmoji = (countryCode: string) => {
    if (countryCode === "DZ") {
      return (
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-lg" style={{ fontFamily: "'Segoe UI Emoji', 'Apple Color Emoji', 'Noto Color Emoji', sans-serif" }}>
          🇩🇿
        </span>
      );
    }
    return <span className="text-xs font-bold">{countryCode}</span>;
  };

  return (
    <div 
      className="relative w-40 h-56 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:z-10"
      onClick={onClick}
    >
      {/* Card Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getOverallColor(player.overall)} rounded-xl shadow-2xl overflow-hidden`}>
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
        }}></div>
        
        {/* Card Content */}
        <div className="relative h-full p-3 flex flex-col text-white">
          {/* Top Section - Overall & Position */}
          <div className="flex items-start gap-2 mb-1">
            <div className="text-center">
              <div className="text-2xl font-black leading-none">{player.overall}</div>
              <div className={`text-xs font-bold px-2 py-0.5 ${getPositionColor(player.position)} rounded mt-1`}>
                {player.position}
              </div>
            </div>
            <div className="flex-1 min-w-0 flex items-center justify-end">
              {getFlagEmoji(player.nationality)}
            </div>
          </div>

          {/* Player Name */}
          <div className="mb-2">
            <div className="text-sm font-black uppercase truncate leading-tight">
              {player.name}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs mt-auto">
            <div className="flex justify-between">
              <span className="font-semibold opacity-90">PAC</span>
              <span className="font-black">{player.pace}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold opacity-90">SHO</span>
              <span className="font-black">{player.shooting}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold opacity-90">PAS</span>
              <span className="font-black">{player.passing}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold opacity-90">DRI</span>
              <span className="font-black">{player.dribbling}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold opacity-90">DEF</span>
              <span className="font-black">{player.defending}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold opacity-90">PHY</span>
              <span className="font-black">{player.physical}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Team Formation View Component
function FormationView({ team, onBack }: { team: any, onBack: () => void }) {
  const getPlayersByPosition = (positions: string[]) => {
    return team.players.filter((p: any) => positions.includes(p.position));
  };

  const goalkeeper = getPlayersByPosition(["GK"])[0];
  const defenders = getPlayersByPosition(["CB", "LB", "RB"]).slice(0, 4);
  const midfielders = getPlayersByPosition(["CM", "CDM", "CAM"]).slice(0, 3);
  const forwards = getPlayersByPosition(["ST", "LW", "RW"]).slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="font-semibold">Back to Teams</span>
        </button>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{team.badge}</span>
          <div>
            <h3 className="text-2xl font-bold text-dz-navy dark:text-white">{team.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{team.stadium}</p>
          </div>
        </div>
      </div>

      {/* Formation Display */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-500 to-green-600 rounded-2xl p-8 shadow-2xl overflow-hidden min-h-[800px]">
        {/* Field Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 w-px h-full bg-white transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-white transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Players in 4-3-3 Formation */}
        <div className="relative z-10 flex flex-col justify-between h-full gap-12">
          {/* Forwards */}
          <div className="flex justify-center gap-16 pt-8">
            {forwards.map((player: any, idx: number) => (
              <FifaCard key={player.id} player={player} />
            ))}
          </div>

          {/* Midfielders */}
          <div className="flex justify-center gap-20">
            {midfielders.map((player: any, idx: number) => (
              <FifaCard key={player.id} player={player} />
            ))}
          </div>

          {/* Defenders */}
          <div className="flex justify-center gap-12">
            {defenders.map((player: any, idx: number) => (
              <FifaCard key={player.id} player={player} />
            ))}
          </div>

          {/* Goalkeeper */}
          <div className="flex justify-center pb-8">
            {goalkeeper && <FifaCard player={goalkeeper} />}
          </div>
        </div>

        {/* Formation Badge */}
        <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
          <div className="text-2xl font-black text-dz-navy dark:text-white">4-3-3</div>
        </div>
      </div>
    </div>
  );
}

export default function MyTeam() {
  const [selectedTeam, setSelectedTeam] = useState<any>(null);

  if (selectedTeam) {
    return (
      <DashboardLayout>
        <FormationView team={selectedTeam} onBack={() => setSelectedTeam(null)} />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-3xl font-bold text-dz-navy dark:text-white tracking-tight">My Teams</h2>
          <p className="text-slate-500 dark:text-slate-400">Select a team to view formation and player cards</p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testTeams.map((team) => (
            <div
              key={team.id}
              onClick={() => setSelectedTeam(team)}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              {/* Team Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{team.badge}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-dz-navy dark:text-white mb-1">
                    {team.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Est. {team.founded}
                  </p>
                </div>
              </div>

              {/* Team Stats */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Stadium</span>
                  <span className="font-semibold text-dz-navy dark:text-white">{team.stadium}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Players</span>
                  <span className="font-semibold text-dz-navy dark:text-white">{team.players.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Formation</span>
                  <span className="font-semibold text-dz-navy dark:text-white">4-3-3</span>
                </div>
              </div>

              {/* View Formation Button */}
              <button className="w-full py-3 bg-dz-navy text-white rounded-xl font-semibold group-hover:bg-slate-900 transition-colors shadow-md flex items-center justify-center gap-2">
                <span>View Formation</span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>

        {/* Add New Team Card */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 text-center border-2 border-dashed border-blue-300 dark:border-slate-600">
          <div className="mx-auto size-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-3xl text-blue-500">add</span>
          </div>
          <h3 className="text-xl font-bold text-dz-navy dark:text-white mb-2">Create New Team</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
            Build your own dream team from scratch
          </p>
          <button className="px-6 py-3 bg-dz-navy text-white rounded-xl font-semibold hover:bg-slate-900 transition-colors shadow-lg">
            Create Team
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
