import { connect } from "mongoose";

export const connectDb = async (url) => {
  try {
    return connect(url);
  } catch (e) {
    process.exit(2);
  }
};
