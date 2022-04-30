const yup = require("yup");

const movieSchema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    imgTitle: yup.string().required(),
    imgSm: yup.string().required(),
    trailer: yup.string().required(),
    video: yup.string().required(),
    year: yup.string().required(),
    limit: yup.string(),
    genre: yup.string().required(),
})

module.exports = { movieSchema }