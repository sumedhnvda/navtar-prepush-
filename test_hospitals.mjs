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

async function checkHospitals() {
  console.log("Fetching hospitals from navatar-1c32e...");
  const hospitalsRef = collection(db, "hospitals");
  try {
    const snapshot = await getDocs(hospitalsRef);
    console.log(`Found ${snapshot.size} hospitals.`);
    snapshot.forEach(d => {
      console.log(`ID: ${d.id} | Data:`, JSON.stringify(d.data(), null, 2));
    });
  } catch (error) {
    console.error("Firestore error:", error);
  }
}

checkHospitals();
