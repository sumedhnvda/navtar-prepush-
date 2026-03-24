import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
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

async function checkPastBookings() {
  const today = dayjs().format("YYYY-MM-DD");
  console.log("Today is:", today);

  const bookingsRef = collection(db, "bookings");
  const q = query(bookingsRef, where("date", "<", today));

  try {
    const snapshot = await getDocs(q);
    console.log(`Found ${snapshot.size} past bookings.`);
    snapshot.forEach(doc => {
      console.log(`ID: ${doc.id} | Date: ${doc.data().date} | Name: ${doc.data().navatar_id}`);
    });
  } catch (error) {
    console.error("Firestore error:", error);
  }
}

checkPastBookings();
