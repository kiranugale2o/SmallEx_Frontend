import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyXGEKYAug5tSJUu0s_uBmDacUb0V70Ow",
  authDomain: "musico-9bf36.firebaseapp.com",
  projectId: "musico-9bf36",
  storageBucket: "musico-9bf36.appspot.com",
  messagingSenderId: "481591878321",
  appId: "1:481591878321:web:0595557ad5e774152cb890",
  measurementId: "G-1Z26M6NX2C",
};
// Initialize Firebase
initializeApp(firebaseConfig);

// Create a root reference
const storage = getStorage();
var data;
export const imageHandler = async (userImg) => {
  const mountainsRef = ref(storage, `smallEx/${userImg.name}`);

  // Create a reference to 'images/mountains.jpg'
  const mountainImagesRef = ref(storage, `smallEx/${userImg}`);
  const res = await uploadBytes(mountainsRef, userImg);
  if (res) {
    const url = await getDownloadURL(ref(storage, `smallEx/${userImg.name}`));
    return url;
  }
};

export const videoSender = async (userVideo) => {
  const videoRef = ref(storage, `postvideo/${userVideo.name}`);
  const myvideoRef = ref(storage, `postvideo/${userVideo}`);
  const res = await uploadBytes(videoRef, userVideo);
  if (res) {
    const url = await getDownloadURL(
      ref(storage, `postvideo/${userVideo.name}`)
    );

    return url;
  }
};
