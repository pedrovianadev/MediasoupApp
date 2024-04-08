import WebSocket from "ws";
import { createWorker } from "./worker";

let mediasoupRouter;

const WebSocketConnection = async (websock: WebSocket.Server) => {
    try {
        mediasoupRouter = await createWorker();
    } catch (error) {
        throw error;
    }

    websock.on('connection', (ws: WebSocket) => {

        ws.on('message', (message: string) => {
            console.log('message: => ', message);
            ws.send("hello from server");
        })

    })
}

export { WebSocketConnection }