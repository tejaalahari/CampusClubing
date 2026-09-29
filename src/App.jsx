import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import ClubCard from "./components/ClubCard";
import ClubModal from "./components/ClubModal";
import Stats from "./components/Stats";

import "./App.css";

function App() {

  const clubs = [
    {
      id: 1,
      name: "CodeCraft Club",
      category: "Coding",
      icon: "💻",
      members: 85,
      events: 12,
      description:
        "A community for students passionate about programming, software development and technology."
    },

    {
      id: 2,
      name: "Sports United",
      category: "Sports",
      icon: "⚽",
      members: 120,
      events: 18,
      description:
        "Build teamwork and stay active through cricket, football, basketball and other sports."
    },

    {
      id: 3,
      name: "Creative Arts Society",
      category: "Arts",
      icon: "🎨",
      members: 65,
      events: 10,
      description:
        "Explore painting, music, dance, photography and other forms of creative expression."
    },

    {
      id: 4,
      name: "Startup Hub",
      category: "Entrepreneurship",
      icon: "🚀",
      members: 55,
      events: 8,
      description:
        "Learn entrepreneurship, startup building, innovation and business strategy."
    },

    {
      id: 5,
      name: "Web Wizards",
      category: "Coding",
      icon: "🌐",
      members: 90,
      events: 14,
      description:
        "Learn modern web technologies and build real-world web applications."
    },

    {
      id: 6,
      name: "Photography Club",
      category: "Arts",
      icon: "📷",
      members: 45,
      events: 9,
      description:
        "Capture campus life and improve your photography and editing skills."
    }
  ];

  const categories = [
    "All",
    "Coding",
    "Sports",
    "Arts",
    "Entrepreneurship"
  ];

  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedClub, setSelectedClub] =
    useState(null);

  const filteredClubs = clubs.filter((club) => {

    const matchesSearch =
      club.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      club.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>

      <Navbar />

      <Hero
        search={search}
        setSearch={setSearch}
      />

      <Stats />

      <main className="clubs-section" id="clubs">

        <div className="section-heading">

          <div>
            <span className="section-label">
              EXPLORE
            </span>

            <h2>
              Find Your Community
            </h2>
          </div>

          <p>
            Discover clubs that match your
            interests and passions.
          </p>

        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {filteredClubs.length > 0 ? (

          <div className="clubs-grid">

            {filteredClubs.map((club) => (

              <ClubCard
                key={club.id}
                club={club}
                onViewDetails={setSelectedClub}
              />

            ))}

          </div>

        ) : (

          <div className="empty-state">

            <div>🔎</div>

            <h3>No clubs found</h3>

            <p>
              Try another search term or category.
            </p>

          </div>

        )}

      </main>

      <footer id="about">

        <div className="footer-logo">
          Campus<span>Connect</span>
        </div>

        <p>
          Connecting students with communities
          that inspire them.
        </p>

        <p className="copyright">
          © 2026 CampusConnect. All rights reserved.
        </p>

      </footer>

      <ClubModal
        club={selectedClub}
        onClose={() => setSelectedClub(null)}
      />

    </div>
  );
}

export default App;