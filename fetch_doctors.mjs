import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZWts8A_RGMRkavPGh5x_Ukjo6b9iFrco",
  authDomain: "navatar-36434.firebaseapp.com",
  projectId: "navatar-36434",
  storageBucket: "navatar-36434.firebasestorage.app",
  messagingSenderId: "978775242523",
  appId: "1:978775242523:web:f9c6004c37bd4e13e805be",
  measurementId: "G-BGERKNBW5C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkDoctors() {
  const doctorsRef = collection(db, "doctors");
  try {
    const snapshot = await getDocs(doctorsRef);
    console.log(`Found ${snapshot.size} doctors.`);
    snapshot.forEach(d => {
      console.log(`ID: ${d.id} | Data:`, d.data());
    });
  } catch (error) {
    console.error("Firestore error:", error);
  }
}

checkDoctors();
