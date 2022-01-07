async function httpGetPlant(req, res) {
  res.send("Get route working!");
}

async function httpGetPlantDiseases(req, res) {
  res.send("Get plant diseases route working");
}

export default {
  httpGetPlant,
  httpGetPlantDiseases,
};
