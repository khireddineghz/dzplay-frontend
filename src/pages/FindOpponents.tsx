import { Navbar } from "../components/layout/Navbar";
import { TeamCard, type TeamCardProps } from "../components/shared/TeamCard";

const TEAMS: TeamCardProps[] = [
  {
    name: "Les Fennecs FC",
    level: "Expert Level",
    location: "Algiers, Hydra",
    schedule: "Fridays • 8:00 PM - 10:00 PM",
    size: "7 vs 7",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAG6oZ7FZpc6RD1Il_X0ycIkQENw-iC_D-6JZMBJ70g8iBwgIDoXzrSd_-tOT84DUfBjNowwv-FcM-RGXmwurz3kLNZyl_5h9vT0F4RwucwJ7VkZ72TyuzRC5rqvuw-qsrN5UWz4OKP3SWJkDs1SaCIvHb-Mina2fXA-t73-Wnw3gPurhocyNddWefI-P6Z6fL43_ZdQTJlYFm5REYc5nvu1AUeGxhi_tMvM_ivkeOuoU9kecVDxmx126XFAJbx0cvXXtiiGV2bGUw",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIE2HW5X9e3BUxY1qnliST4gFoq3pNhlqRlgXKWB0ePBsLuWqWKXQ33J1An-HOhG5yiF6XBfWLD-SHSsIC0k3aPEzJKzXFjWFW8IfukmYG0cDXSyPD-4Yo4jNQN_coNn2IZNlc3Jl-a5hzoskQSN7Z6Rqparx6biSVsffo85f17xCJfjD01D0xuLRY7wHvlpVUHWtTroDpRdf80phomm9utaFWEhDDWu65n8IKmCH9LeNFn6XFUnYI9ooJRQI4NNcvoTMY0T6GpUw",
  },
  {
    name: "Oran United",
    level: "Intermediate",
    location: "Oran, Es Senia",
    schedule: "Weekends • Afternoon",
    size: "5 vs 5",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmGGHKmQIZU_8sep2KT4H8kSIGFQoWtChU0E0YDacIQb--4iUp8kR79QX8JnsDSMk4Kk50jwrR7HBkvt96VLpkXaLCU_VCCbdDS7Na04PYxcU8bvvAEbgy_hyuOw5XOedxuuniEYiEq3xNz3IA33u005YoBZTdzmzftCowZQ8t360Gbb6cu9ZxsOFZ0w9-Dc5lJG-hzhhYJqU8ZPlKbNCE-ruWlHsLBg8Hlba1nTPwFIyry6SEtyWSUGUotqx-seZqMO-4gqh_ZB0",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvd6zOBf3XkVrD0iFnbNwBHjzhhI2Y_hgJUsvnjBtoC7Zv8WvDKMUvIS5CUck3bP_aJg4l3YnBFtcZi4TqLPoII5KzMCl5UzNL-SMx99S4eqm2OaSaYtr2KRc9SpHtYWt3MkXdn0pDBfT1IXzExMTvoSxbDmzAFZlFAtkL6BZOn1FHOG5liqtmvDNibw2eyXNPaYyJ9FG0y2G2V5guegQAbhS5HXBPRsp5NQQfy_Q3Tdil11UBHhoh6ib2I_xNA2zOfbB7wb9QL1E",
  },
  {
    name: "Casbah Warriors",
    level: "Amateur",
    location: "Algiers, Casbah",
    schedule: "Anytime • Flexible",
    size: "5 vs 5",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeRIBo0cidpQhPU_6c0_4Z2ITbeZX2IWvZPj2A-_JJIRpWi1dNJflse8aPdjGaOAVIW-Gt2GBZqKh_JefJsSZFPr5E7c4D--p8kvSgPQn4OWWFq1SbK4jKnrB5jSFowZoqFW-iwB0KdFGi0GqwiDdojpTlNxhZgI20WmJzqvL3dzXGO_hlxpypiyH3tdShXsuoxNJUtj03JhG2H-yVf3T0TWEiQaPuB_DEyyCX0MTv68jePufw_4OoSwJQmx7XMf2ZjWTEaWh3wRU",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7ob2Hk3ry8TemPT-95pWafDRudOKxVri0pf84VVcJcpLIswkHQHpDuAKhIdNcsf3J-3nu_NPmAX_MnA4XDJbdW-OdwIxzXs0q_4faqmPputoLTtCIdQKHY6mt224-Scr34zlDTfWWwE3phm3jtXR4BzEiHzwaYkrPvTM1urA2KBe6biEEFMzGQJyIYUNfr32p_DzLLu1nANuAPrh4gNgyO_kNivMh9a-WLyBxnYO4AL5AOBtGK8ZkZPJ1BJi6FzXbjfNWUEdzIt4",
  },
  {
    name: "Constantine Kings",
    level: "Expert Level",
    location: "Constantine, Downtown",
    schedule: "Thursdays • 7:00 PM",
    size: "7 vs 7",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFToxniwnDQ06pCX86Wld1LxcSlXhcZaNi5VClMgFwLfnCCQVqUvt6h7zFyzobRJ1R2P26aDxG26lAUk48Smw3BVlBggdNx3j043YGpycvbQpMpHZyfLdObgyogYRk6Y8Kb5oGT-UPwNT1uBogV-zkuVm96RsZY4-suaz9BEG2zTlE1jDbRJDqSR51ZtX5eGkPvXaaAGEiRF3m4LWrYhcWg4IZM8JmJJJcC_ZMVQ47mpjYHe98tyWbAbkyahOhMNzCEGZyf7iNL2g",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3zpZGgbJ9bnNPUTu5hiQKUnREGuMhoJMDPSEdq_suU9CXV1xvN964FHBDFluXFw7Gchv6qpCvXYKcACsGTW7cY2hSWXsbH0qlvY1o-CMhUrqb6M7qqxMi9N9g3_UhPPo9O9ctd4P3Bi_vYGFwJtCx1R25c_g74bKgwYXp5q5YU3VKNJdIOp_DVjre1UUmMXXRQIFEvSwamH58AYMBB8Fr_Znf5IlqUYZnHX31WX3Xz2obAaqGYo1HNLjkHL32plG4Gtbc0KKQ9LM",
  },
  {
    name: "Setif Eagles",
    level: "Intermediate",
    location: "Sétif, El Eulma",
    schedule: "Saturdays • 4:00 PM",
    size: "11 vs 11",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZQm4L5-EFufSdAI9rk79K8Cx8ARep5Hvaus_pEqs_Tr7DVf-m9WwJ-_p_qfN_E2rNLtaKK8iExt04bnemeGLhqFddX6EKlkwEHIluHJG0z9ndlPxb38K8p18Upr32veoDUyNCmUsRmdLoUz3vNB_YVN9KbkCH-2axLoy6qe2yBwOVnBjIn2aaas6_kGJz7DzTLfTfOwG8HirldMYepZfWyReEn1bjyp3sBxBSZRuwa8l3PhCQWejvipU1P3zxeg4sOMKjU3lOvE0",
    logoUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqspFP3TOBc_0xNG7ecVqYVA8OvPFMvbYJoeZ99tZ_aL5Rg3YpEpDpv1Zi2xrOwTUvZwDfafCfLAIb29px9_lpDBx8rDoGO8FBdpPsZCO7xcsRyiq4gy7a87zusf2ii-2SCDsfE0fzJ5_c0l0SF8dwxpR_cdiJo-tpBqZ_TMdM9eNtbhTRYsrmLy2oqHCx-3gBW0JTcA-gja5VL4bY-G2tiDpa2r11M7PFL5ZfDgr8bD9KKAZNynfO5S7zne2T0TLF7ygm9BR_rjs",
  },
];

export default function FindOpponents() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-field-texture bg-cover bg-center bg-fixed w-full">
        <div className="layout-container flex h-full flex-col">
          <div className="px-4 md:px-10 lg:px-40 py-8 flex flex-1 justify-center">
            <div className="flex flex-col w-full max-w-[1200px] flex-1 gap-8">
              {/* Page Heading */}
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between animate-fade-in-up">
                <div className="flex flex-col gap-2">
                  <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                    Find Your <span className="text-primary">Next Opponent</span>
                  </h1>
                  <p className="text-text-secondary text-base md:text-lg font-normal max-w-2xl">
                    Browse teams across Algeria, check skill levels, and
                    schedule your next match. It's time to play.
                  </p>
                </div>
                <button className="mt-4 md:mt-0 bg-surface-dark hover:bg-surface-dark-highlight border border-surface-dark-highlight text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all">
                  <span className="material-symbols-outlined text-[20px]">
                    add
                  </span>
                  Create Your Team
                </button>
              </div>

              {/* Search & Filters Toolbar */}
              <div className="bg-surface-dark/80 backdrop-blur-sm border border-surface-dark-highlight p-4 rounded-xl flex flex-col md:flex-row gap-4 items-center shadow-lg">
                {/* Search Bar */}
                <div className="w-full md:flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-text-secondary">
                      search
                    </span>
                  </div>
                  <input
                    className="w-full bg-background-dark/50 text-white border-none rounded-lg py-3 pl-10 pr-4 placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
                    placeholder="Search by team name..."
                    type="text"
                  />
                </div>
                {/* Filters */}
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  {/* Location Filter */}
                  <div className="relative group">
                    <button className="flex h-11 items-center justify-between gap-x-2 rounded-lg bg-background-dark/50 hover:bg-surface-dark-highlight px-4 text-white transition-colors border border-surface-dark-highlight/50 min-w-[160px]">
                      <span className="text-sm font-medium">All Wilayas</span>
                      <span className="material-symbols-outlined text-[20px] text-text-secondary">
                        expand_more
                      </span>
                    </button>
                  </div>
                  {/* Skill Level Filter */}
                  <div className="relative group">
                    <button className="flex h-11 items-center justify-between gap-x-2 rounded-lg bg-background-dark/50 hover:bg-surface-dark-highlight px-4 text-white transition-colors border border-surface-dark-highlight/50 min-w-[140px]">
                      <span className="text-sm font-medium">Any Level</span>
                      <span className="material-symbols-outlined text-[20px] text-text-secondary">
                        expand_more
                      </span>
                    </button>
                  </div>
                  {/* Date Filter */}
                  <div className="relative group">
                    <button className="flex h-11 items-center justify-between gap-x-2 rounded-lg bg-background-dark/50 hover:bg-surface-dark-highlight px-4 text-white transition-colors border border-surface-dark-highlight/50">
                      <span className="text-sm font-medium">Availability</span>
                      <span className="material-symbols-outlined text-[20px] text-text-secondary">
                        calendar_today
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
                {TEAMS.map((team, index) => (
                  <TeamCard key={index} {...team} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
