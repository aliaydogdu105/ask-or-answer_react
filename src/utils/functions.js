import firebase from "./firebase";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import Toastify from "./toastify";

// add

export const AddQuestion = (addQuestion) => {
  const db = getDatabase(firebase);
  const userQues = ref(db, "ask/");
  const newUserQues = push(userQues);
  set(newUserQues, {
    question: addQuestion.question,
    answer: addQuestion.answer,
  });
  Toastify("Question added");
};

// get

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [inCard, setInCard] = useState();

  useEffect(() => {
    const db = getDatabase(firebase);
    const userQues = ref(db, "ask/");
    onValue(userQues, (snapshot) => {
      const data = snapshot.val();
      const userQuestion = [];

      for (let id in data) {
        userQuestion.push({ id, ...data[id] });
      }
      setInCard(userQuestion);
      setIsLoading(false);
    });
  }, []);

  return { isLoading, inCard };
};

export const DeleteQuestion = (id) => {
  const db = getDatabase(firebase);
  Toastify("Card deleted");
  remove(ref(db, "ask/" + id));
};

export const LastAnswer = (addQuestion) => {
  const db = getDatabase(firebase);
  const answers = {};
  answers["ask/" + addQuestion.id] = addQuestion;
  Toastify("Answered");
  return update(ref(db), answers);
};
