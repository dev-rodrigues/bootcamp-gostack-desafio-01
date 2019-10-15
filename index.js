const express = require('express');
const server = express();

const projects = [{ id: "1", title: "Novo projeto", tasks: [] }]

// Deve retornar todos os projetos guardados em memoria
server.get('/projects', (req, res) => {
    return res.json(projects);
});

// Deve retonar o projeto do id especificado na URL
server.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    var project = projects.find(function(element) {
        return element.id === id;
    });

    return res.json(project);
});

server.listen(3000);