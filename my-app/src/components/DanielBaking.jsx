import BrowniesData from "../data/recipes/Brownies.json";
import RecipeDisplay from "./RecipeDisplay.jsx";

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
                        <h3>Recipes</h3>
                        <ul>
                          <li>Brownies</li>
                          <li>recipe 2</li>
                          <li>recipe 3</li>
                          <li>recipe 4</li>
                        </ul>
                      </div>

                      <div className="col-md-6">
                        <h3>Tools</h3>
                        <ul>
                          <li>Weight to volume conversion</li>
                        </ul>
                      </div>
                    </div>
                    <hr
                      style={{
                        color: "black",
                        backgroundColor: "black",
                        height: 5,
                      }}
                    />
                    <RecipeDisplay recipe={BrowniesData} />
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
