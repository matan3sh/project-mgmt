const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");

const PORT = process.env.PORT || 4000;
const app = express();
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, console.log("Server is listening on port " + PORT));
