
import "./config/env";



import app from "./app";

import { initTelegram } from "./telegramClient";

const PORT = process.env.PORT || 3000;

initTelegram();
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
