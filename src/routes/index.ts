import { Router } from 'express'; 
import { addNote, getNotes } from '../controllers/notesController';

const router = Router(); 

router.get("/notes", getNotes);
router.get("/add-note", addNote); 
router.post("/add-note", addNote);
export default router;
