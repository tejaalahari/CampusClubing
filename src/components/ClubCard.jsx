function ClubCard({ club, onViewDetails }) {
  return (
    <div className="club-card">

      <div className="club-icon">
        {club.icon}
      </div>

      <div className="club-content">

        <span className="club-category">
          {club.category}
        </span>

        <h3>{club.name}</h3>

        <p>{club.description}</p>

        <div className="club-footer">

          <span>
            👥 {club.members} Members
          </span>

          <button
            onClick={() => onViewDetails(club)}
          >
            View Details →
          </button>

        </div>

      </div>

    </div>
  );
}

export default ClubCard;