const RecipeDisplay = ({ recipe }) => {
  if (!recipe) {
    return <div>No recipe data available</div>;
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <h3>{recipe.title}</h3>
      <p>
        <strong>Description:</strong> {recipe.description}
      </p>
      <div style={{ marginBottom: "20px" }}>
        <span>
          <strong>Servings:</strong> {recipe.servings}
        </span>
        {recipe.category && (
          <span>
            {" "}
            | <strong>Category:</strong> {recipe.category}
          </span>
        )}
        {recipe.totalTime && (
          <span>
            {" "}
            | <strong>Total Time:</strong> {recipe.totalTime}
          </span>
        )}
      </div>

      <div className="row" style={{ marginTop: "30px" }}>
        <div className="col-md-6">
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <strong>
                    {ingredient.amount} {ingredient.unit}
                  </strong>{" "}
                  {ingredient.item}
                  {ingredient.method && ` (${ingredient.method})`}
                </li>
              ))}
          </ul>
        </div>

        <div className="col-md-6">
          <h4>Instructions:</h4>
          <ol>
            {recipe.instructions &&
              recipe.instructions.map((step, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  {step.instruction}
                </li>
              ))}
          </ol>
        </div>
      </div>

      {recipe.tips && recipe.tips.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h4>Tips:</h4>
          <ul>
            {recipe.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}

      {recipe.variations && recipe.variations.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h4>Variations:</h4>
          <ul>
            {recipe.variations.map((variation, index) => (
              <li key={index}>{variation}</li>
            ))}
          </ul>
        </div>
      )}

      {recipe.storage && (
        <div style={{ marginTop: "20px" }}>
          <h4>Storage:</h4>
          <p>{recipe.storage}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeDisplay;
