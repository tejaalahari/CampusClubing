function Hero({ search, setSearch }) {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <span className="hero-badge">
          🎓 CAMPUS COMMUNITY
        </span>

        <h1>
          Discover Your
          <span> Campus Community</span>
        </h1>

        <p>
          Explore college clubs, connect with like-minded
          students, and discover opportunities that match
          your interests.
        </p>

        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search clubs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;