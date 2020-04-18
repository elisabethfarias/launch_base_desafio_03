const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require ("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false
})

server.get("/", function(req, res) {
  return res.render("courses", { items: videos })
})

server.get("/about", function(req, res) {
  const about = {
    avatar_url: "https://avatars3.githubusercontent.com/u/56240554?s=400&u=07be60b1f8b973a30e7605f42e026c41c0a0c831&v=4",
    name: "Elisabeth Farias",
    role: "Aluna - Rocketseat",
    description: 'Programadora Front-End Júnior <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
    links: [
      { name: "Github", url: "https://github.com/elisabethfarias" },
      { name: "Facebook", url: "https://www.facebook.com/elisabeth.stm" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/elisabethfarias/" }
    ]
  }


  return res.render("about", { about })
})


server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, function() {
  console.log("server is running")
})
