import { getApp } from "./applications/app";

const PORT = process.env.PORT || 3001;

const app = getApp();

app.listen(PORT, () => {
  console.log("Listening to port " + PORT);
});
