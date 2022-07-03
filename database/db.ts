import mongoose from "mongoose";

// 0 = disconneted
// 1 = conneted
// 2 = connecting
// 3 = disconnecting
const url = "mongodb+srv://wicovi:7XVVaEWkjCBFxuHj@cluster0.urvz0.mongodb.net/";
const mongoConection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongoConection.isConnected) {
    console.log("Ya estamos conectados ");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConection.isConnected = mongoose.connections[0].readyState;

    if (mongoConection.isConnected === 1) {
      console.log("Usando conexion anterior");
      return;
    }
    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL || "");
  mongoConection.isConnected = 1;
  console.log("Conectado a MongoDB " + process.env.MONGO_URL);
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === "development") {
    return;
  }

  if (mongoConection.isConnected === 0) {
    return;
  }

  await mongoose.disconnect();

  mongoConection.isConnected = 0;

  console.log("Desconectado de MongoDB");
};
