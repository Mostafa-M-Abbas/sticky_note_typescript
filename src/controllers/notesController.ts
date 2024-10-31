import { Request, Response } from "express";
import Note from "../models/Note";

export const addNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.redirect("/notes");
  } catch (err) {
    res.status(500).send("Error adding note");
  }
};
export const getNotes = async (req: Request, res: Response): Promise<void> => {
  try {
    const notes = await Note.find();
    res.render("notes", { notes });
  } catch (err) {
    res.status(500).send("Error retrieving notes");
  }
};
