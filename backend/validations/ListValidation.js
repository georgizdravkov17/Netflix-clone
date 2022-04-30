const yup = require("yup");

const listSchema = yup.object({
  title: yup.string().required(),
  type: yup.string().required(),
  genre: yup.string().required(),
  content: yup.string()
})

module.exports = { listSchema }