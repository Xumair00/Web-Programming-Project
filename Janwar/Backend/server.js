import express from "express";
import cors from "cors";
import { db_users} from "./janwar.js";
import emailRoutes from "./emails.js";
import bodyParser from 'body-parser';



//require('dotenv').config({ path: './config.env' });

const PORT = process.env.PORT || 5050;
const app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.use(cors());

app.use(cors(), function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


app.use(express.json());
app.use("/user", db_users);


app.use(bodyParser.json());
app.use('/email', emailRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

