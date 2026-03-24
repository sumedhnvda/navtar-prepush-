import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import dayjs from "dayjs";

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

async function deletePastBookings() {
  const today = dayjs().format("YYYY-MM-DD");
  console.log("Today is:", today);

  const bookingsRef = collection(db, "bookings");
  const q = query(bookingsRef, where("date", "<", today));

  try {
    const snapshot = await getDocs(q);
    console.log(`Found ${snapshot.size} past bookings to delete.`);
    
    for (const document of snapshot.docs) {
      await deleteDoc(doc(db, "bookings", document.id));
      console.log(`Deleted ID: ${document.id} | Date: ${document.data().date}`);
    }
    
    console.log("Deletion complete!");
  } catch (error) {
    console.error("Firestore error during deletion:", error);
  }
}

deletePastBookings();
