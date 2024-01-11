export const status = (req, res) => {
  res.status(200).json({ message: "it worked!" });
};

export default status;
