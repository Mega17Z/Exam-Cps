import { auth, db } from "../../Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const ajouterUtilisateur = async (userId, role = "user") => {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, {
      role: role,
      createdAt: new Date(),
    });

    console.log("Utilisateur ajouté avec succès.");
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'utilisateur:", error);
  }
};

const inscriptUtilisateur = async (email, password, nom, role = "user") => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(userCredential.user, { displayName: nom });

    await ajouterUtilisateur(userCredential.user.uid, role);

    console.log(userCredential.user);
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de l'utilisateur:", error);
  }
};

export { inscriptUtilisateur };