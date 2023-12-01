let composerProfiles = [];

function fetchProfiles(userPreferences) {
  fetch("profiles.json")
    .then((response) => response.json())
    .then((data) => {
      composerProfiles = data;
      const closestMatch = findBestMatch(userPreferences);
      changeName(closestMatch.name);
      changeImage(closestMatch.name);
      selectFlag(closestMatch.name);
      updateBiography(closestMatch.name);
      updateRecommendedListening(closestMatch.name);
    });
}

function findBestMatch(userPreferences) {
  let bestMatch = null;
  let smallestDistance = Infinity;

  for (const profile of composerProfiles) {
    const distance = calculateDistance(profile, userPreferences);

    if (distance < smallestDistance) {
      bestMatch = profile;
      smallestDistance = distance;
    }
  }

  return bestMatch;
}

function calculateDistance(profile, userPreferences) {
  return Math.sqrt(
    Math.pow(profile.orderChaos - userPreferences.orderChaos, 2) +
      Math.pow(profile.lightDark - userPreferences.lightDark, 2) +
      Math.pow(profile.oldNew - userPreferences.oldNew, 2) +
      Math.pow(profile.simpleComplex - userPreferences.simpleComplex, 2) +
      Math.pow(profile.sugarSpice - userPreferences.sugarSpice, 2)
  );
}

let userPreferences = {
  orderChaos: 50,
  lightDark: 50,
  oldNew: 50,
  simpleComplex: 50,
  sugarSpice: 50,
};

// document.getElementById("submitBtn").addEventListener("click", function () {
//   updatePreferencesFromSliders();
//   fetchProfiles(userPreferences);
//   updateRecommendedListening(composerName);
//   resultSection.style.filter = "blur(0)";
//   resultSection.style.opacity = 1;
//   music.style.filter = "blur(0)";
//   music.style.opacity = 1;
// });

document.getElementById("submitBtn").addEventListener("click", function () {
  updatePreferencesFromSliders();
  fetchProfiles(userPreferences);
  resultSection.style.filter = "blur(0)";
  resultSection.style.opacity = 1;
  music.style.filter = "blur(0)";
  music.style.opacity = 1;
});

function updatePreferencesFromSliders() {
  userPreferences.orderChaos = parseInt(
    document.getElementById("orderChaos").value,
    10
  );
  userPreferences.lightDark = parseInt(
    document.getElementById("lightDark").value,
    10
  );
  userPreferences.oldNew = parseInt(
    document.getElementById("oldNew").value,
    10
  );
  userPreferences.simpleComplex = parseInt(
    document.getElementById("simpleComplex").value,
    10
  );
  userPreferences.sugarSpice = parseInt(
    document.getElementById("sugarSpice").value,
    10
  );
}

document.getElementById("resetBtn").addEventListener("click", function () {
  resetSliders();
  resetResultSection();
});

function resetResultSection() {
  result.style.filter = "blur(5px)";
  music.style.filter = "blur(5px)";
  result.style.opacity = 0;
  music.style.opacity = 0;
}

function resetSliders() {
  document.getElementById("orderChaos").value = 50;
  document.getElementById("lightDark").value = 50;
  document.getElementById("oldNew").value = 50;
  document.getElementById("simpleComplex").value = 50;
  document.getElementById("sugarSpice").value = 50;
}

document.getElementById("randomizeBtn").addEventListener("click", function () {
  randomizeSliders();
});

function randomizeSliders() {
  document.getElementById("orderChaos").value = getRandomValue();
  document.getElementById("lightDark").value = getRandomValue();
  document.getElementById("oldNew").value = getRandomValue();
  document.getElementById("simpleComplex").value = getRandomValue();
  document.getElementById("sugarSpice").value = getRandomValue();
}

function getRandomValue() {
  return Math.floor(Math.random() * 100) + 1;
}

const result = document.getElementById("resultSection");
const music = document.getElementById("music");

function changeImage(result) {
  fetch("composers.json")
    .then((response) => response.json())
    .then((data) => {
      const composerImages = data.composerImages;

      if (composerImages[result]) {
        const composerImage = document.getElementById("composerImage");
        composerImage.src = composerImages[result];
      }
    });
}

function changeName(result) {
  fetch("names.json")
    .then((response) => response.json())
    .then((data) => {
      const composerFullNames = data.composerNames;
      const composerName = document.getElementById("composerName");
      composerName.innerText = composerFullNames[result] || "";
    });
}

function updateBiography(result) {
  fetch("biographies.json")
    .then((response) => response.json())
    .then((biographies) => {
      const aboutElement = document.getElementById("about");
      aboutElement.innerText =
        biographies[result] || "Biography not available.";
    });
}

function selectFlag(result) {
  fetch("flags.json")
    .then((response) => response.json())
    .then((data) => {
      const composerFlags = data.composerFlags;
      const composerFlag = document.getElementById("flag");
      composerFlag.src = composerFlags[result];
    });
}

function updateRecommendedListening(result) {
  const recList = document.getElementById("recList");
  const recDesc = document.getElementById("recDesc");
  const recVid = document.getElementById("recVid");

  fetch("listening.json")
    .then((response) => response.json())
    .then((data) => {
      const composers = data.composers;

      if (composers[result]) {
        const recommendedListening = composers[result];
        recList.innerText = recommendedListening.subheading;
        recDesc.innerText = recommendedListening.description;
        recVid.src = recommendedListening.videoUrl;
      } else {
        recList.innerText = "Recommended Listening Not Available";
        recDesc.innerText = "";
        recVid.src = "";
      }
    })
    .catch((error) => {
      console.error("Error fetching listening data: ", error);
    });
}
