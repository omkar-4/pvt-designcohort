console.log("endpoint is working");

import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (req: VercelRequest, res: VercelResponse) => {
  const method = req.method;
  try {
    if (method === "GET") {
      res.status(200).json({ message: "Hello, this is a GET request!" });
    } else if (method === "POST") {
      const requestBody = req.body;
      res.status(200).json({ message: "Data received", data: requestBody });
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (err) {
    console.error("Error in API handler:", err); // Log the error for debugging
  }
};

// export default function handler(req, res) {
//   res.status(200).json({ message: "Hello World" });
// }

// MongoDB connection URI
// const uri = process.env.MONGODB_URI as string;

// console.log(uri);

// import { VercelRequest, VercelResponse } from "@vercel/node";
// import mongoose from "mongoose";

// // Mongoose model
// const DataModel = mongoose.model(
//   "Data",
//   new mongoose.Schema({
//     name: { type: String, required: true },
//     value: { type: Number, required: true },
//   })
// );

// // Connect to the database
// async function connectToDatabase() {
//   if (mongoose.connection.readyState === 0) {
//     if (!uri) {
//       console.log("MongoDB URI is not defined");

//       throw new Error("MongoDB URI is not defined");
//     }
//     await mongoose.connect(uri);
//   }
// }

// // API handler
// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   try {
//     await connectToDatabase();

//     const data = await DataModel.find({});
//     res.status(200).json(data);
//   } catch (error) {
//     console.error("Error in API handler:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// }

// import { VercelRequest, VercelResponse } from "@vercel/node";
// import mongoose, { Document } from "mongoose";

// // TypeScript interface for data model
// interface IData extends Document {
//   name: string;
//   value: number;
// }

// // Mongoose schema and model
// const dataSchema = new mongoose.Schema<IData>({
//   name: { type: String, required: true },
//   value: { type: Number, required: true },
// });

// const DataModel = mongoose.model<IData>("Data", dataSchema);

// // MongoDB connection URI
// const uri = process.env.MONGODB_URI;

// // A singleton for MongoDB connection
// async function connectToDatabase() {
//   if (!uri) {
//     throw new Error("MongoDB URI is not defined");
//   }
//   if (mongoose.connection.readyState === 0) {
//     await mongoose.connect(uri);
//   }
// }

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   try {
//     await connectToDatabase();

//     const data = await DataModel.find({}).catch((err) => {
//       console.error("Error fetching data:", err);
//       throw new Error("Error fetching data");
//     });

//     res.status(200).json(data);
//   } catch (error) {
//     console.error("Error in API handler:", error); // Log the error for debugging
//     res
//       .status(500)
//       .json({ message: "Internal Server Error", error: error.message });
//   }
// }
