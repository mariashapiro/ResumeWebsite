const DanielBaking = () => {
  return (
    <div>
      <section className="colorlib-about" data-section="danielbaking">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">Daniel's Baking Corner</span>
                    <h2 className="colorlib-heading">Sweet Creations & Recipes</h2>
                    <p>
                      Welcome to Daniel's Baking Corner! This is a dedicated space for sharing delicious recipes, baking tips, and sweet
                      creations.
                    </p>

                    <div className="row" style={{ marginTop: "40px" }}>
                      <div className="col-md-6">
                        <h3>Featured Recipes</h3>
                        <ul>
                          <li>🍪 Classic Chocolate Chip Cookies</li>
                          <li>🧁 Vanilla Bean Cupcakes</li>
                          <li>🥖 Artisan Sourdough Bread</li>
                          <li>🍰 Decadent Chocolate Cake</li>
                        </ul>
                      </div>

                      <div className="col-md-6">
                        <h3>Baking Tips</h3>
                        <ul>
                          <li>📏 Always measure ingredients precisely</li>
                          <li>🌡️ Check your oven temperature</li>
                          <li>⏰ Room temperature ingredients mix better</li>
                          <li>🥄 Don't overmix your batter</li>
                        </ul>
                      </div>
                    </div>

                    <div style={{ marginTop: "40px", textAlign: "center" }}>
                      <p>
                        <em>More recipes and content coming soon! This page is under development.</em>
                      </p>
                      <a href="/" className="btn btn-primary" style={{ marginTop: "20px" }}>
                        ← Back to Portfolio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DanielBaking;
