import contactModel from "../models/contact.model.js";

export const contactData = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await contactModel.create({
      name,
      email,
      subject,
      message,
    });

    res.status(200).json({
      message: "Thanks for connecting",
      contact,
    });
  } catch (error) {
    next(error);
  }
};
