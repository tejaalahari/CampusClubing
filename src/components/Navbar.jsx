function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Campus<span>Connect</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#clubs">Explore Clubs</a>
        <a href="#about">About</a>
      </div>

      <button className="join-btn">
        Join a Club
      </button>
    </nav>
  );
}

export default Navbar;