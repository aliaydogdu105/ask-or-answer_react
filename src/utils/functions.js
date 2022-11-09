import firebase from "./firebase";
import { getDatabase, push, ref, set } from "firebase/database";

export const AddQuestion = (addQuestion) => {
  const db = getDatabase(firebase);
  const userQues = ref(db, "ask/");
  const newUserQues = push(userQues);
  set(newUserQues, {
    question: addQuestion.question,
  });
};
