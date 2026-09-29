function ClubModal({ club, onClose }) {

  if (!club) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>

        <div className="modal-icon">
          {club.icon}
        </div>

        <span className="club-category">
          {club.category}
        </span>

        <h2>{club.name}</h2>

        <p>
          {club.description}
        </p>

        <div className="modal-info">

          <div>
            <strong>{club.members}</strong>
            <span>Members</span>
          </div>

          <div>
            <strong>{club.events}</strong>
            <span>Events / Year</span>
          </div>

        </div>

        <button className="modal-join">
          Join Club
        </button>

      </div>

    </div>
  );
}

export default ClubModal;