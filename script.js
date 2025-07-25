document.getElementById("healthForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const condition = document.getElementById("condition").value;
  const recommendations = document.getElementById("recommendations");

  const foodSuggestions = {
    diabetes: [
      { food: "Bitter Gourd (Karela)", reason: "Helps lower blood sugar levels." },
      { food: "Fenugreek Seeds (Methi)", reason: "Improves insulin sensitivity." },
      { food: "Brown Rice", reason: "Has lower glycemic index." }
    ],
    thyroid: [
      { food: "Iodized Salt", reason: "Supports thyroid hormone production." },
      { food: "Bananas", reason: "Rich in iodine and B-vitamins." },
      { food: "Moong Dal", reason: "Easy to digest and supports metabolism." }
    ],
    bp: [
      { food: "Beetroot", reason: "Rich in nitrates that reduce BP." },
      { food: "Spinach", reason: "High in potassium and magnesium." },
      { food: "Garlic", reason: "Natural BP reducer." }
    ],
    arthritis: [
      { food: "Turmeric", reason: "Anti-inflammatory compound curcumin." },
      { food: "Amla", reason: "Rich in Vitamin C, good for joints." },
      { food: "Ginger", reason: "Reduces joint pain and stiffness." }
    ],
    hearing: [
      { food: "Carrots", reason: "Rich in Vitamin A for ear health." },
      { food: "Almonds", reason: "Contain magnesium & zinc." },
      { food: "Spinach", reason: "Loaded with folate and potassium." }
    ]
  };

  const selectedFoods = foodSuggestions[condition];

  if (selectedFoods) {
    let html = `<h3>Recommended Foods:</h3><ul>`;
    selectedFoods.forEach(item => {
      html += `<li><strong>${item.food}:</strong> ${item.reason}</li>`;
    });
    html += `</ul>`;
    recommendations.innerHTML = html;
  } else {
    recommendations.innerHTML = "<p>No recommendations found.</p>";
  }
});
