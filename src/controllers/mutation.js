//import data
const { mutationService } = require("../services");

//module exports
module.exports = {
  browse: async (req, res) => {
    try {
      const mutation = await mutationService.browse();

      res.status(200).send({ data: mutation });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
  add: async (req, res) => {
    const { body } = req;

    //create new user
    const mutationData = {
      ...body,
    };

    try {
      const histori = await mutationService.add(mutationData);
      res.send(histori);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
