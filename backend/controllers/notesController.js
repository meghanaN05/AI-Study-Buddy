import Note from "../models/Note.js";

export const uploadNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ userId: req.user, title, content });
    await note.save();
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: "Error uploading note", error: err.message });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching notes", error: err.message });
  }
};
