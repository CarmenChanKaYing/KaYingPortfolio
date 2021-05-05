exports.createPages = ({ actions: { createPage } }) => {
  const projectData = require("./src/projectDatabase.json")

  projectData.forEach(data => {
    let projectInfo = {
      path: `/${data.slug}/`,
      component: require.resolve("./src/template/projectDetail.js"),
      context: {
        title: data.title,
        photo: data.photo,
        languages: data.languages,
        content: data.content,
      },
    }

    if (data.description !== undefined) {
      projectInfo["context"]["description"] = data.description
    }

    if (data.github !== undefined) {
      projectInfo["context"]["github"] = data.github
    }

    if (data.demo !== undefined) {
      projectInfo["context"]["demo"] = data.demo
    }

    createPage(projectInfo)
  })
}
