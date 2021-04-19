import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        menssage: "Ola nlw 05",
    });
});

app.post("/users", (request, response) => {
    return response.json({ 
        message: "Usuario salvo com sucesso!"
    });
});


app.listen(3333, () => console.log("Server is running on port 3333"));
