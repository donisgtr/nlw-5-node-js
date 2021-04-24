// começar a trabalhar com eventos.

import { io } from "../http";

io.on ("connect", (socket) => {
    socket.on("client_first_acess", (params) => {
        
    })
});