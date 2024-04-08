import WebSocket from "ws";

const WebSocketConnection = async (websock: WebSocket.Server) => {
    websock.on('connection', (ws: WebSocket) => {

        ws.on('message', (message: string) => {
            console.log('message: => ', message);
            ws.send("hello from server");
        })

    })
}

export { WebSocketConnection }