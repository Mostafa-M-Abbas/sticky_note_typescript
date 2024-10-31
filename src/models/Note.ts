import { Schema, model, Document } from 'mongoose';

interface INote extends Document {
  title: string;
  content: string;
}

const noteSchema = new Schema<INote>({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

export default model<INote>('Note', noteSchema);
