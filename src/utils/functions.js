import firebase from "./firebase";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

export const AddQuestion = (addQuestion) => {
  const db = getDatabase(firebase);
  const userQues = ref(db, "ask/");
  const newUserQues = push(userQues);
  set(newUserQues, {
    question: addQuestion.question,
  });
};

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
