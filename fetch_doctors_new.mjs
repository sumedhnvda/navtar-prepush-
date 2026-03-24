import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4x-lZJ-WkkICdmXVOzlTzaFWxHojNzks",
  authDomain: "navatar-1c32e.firebaseapp.com",
  projectId: "navatar-1c32e",
  storageBucket: "navatar-1c32e.firebasestorage.app",
  messagingSenderId: "773942921499",
  appId: "1:773942921499:web:6162b7576cbfd20d0a2bbe"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkDoctors() {
  console.log("Fetching doctors from navatar-1c32e...");
  const doctorsRef = collection(db, "doctors");
  try {
    const snapshot = await getDocs(doctorsRef);
    console.log(`Found ${snapshot.size} doctors.`);
    snapshot.forEach(d => {
      console.log(`ID: ${d.id} | Data:`, JSON.stringify(d.data(), null, 2));
    });
  } catch (error) {
    console.error("Firestore error:", error);
  }
}

checkDoctors();
