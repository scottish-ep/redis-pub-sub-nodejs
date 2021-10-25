import { App } from "@tinyhttp/app";
import { json } from "milliparsec";
import Redis from "ioredis";

const app = new App();
const redis = new Redis();

app.use(json());

app.post("/", (req, res) => {
    console.log(JSON.stringify({ ...req.body }));
    redis.publish("send-user-data", JSON.stringify({ ...req.body }));
    return res.sendStatus(200);
});

app.listen(3000);
