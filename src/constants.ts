interface EngagementLabels {
  joinUs: string;
  twoSouls: string;
  details: string;
  rsvp: string;
  brideFamily: string;
  groomFamily: string;
  lookForward: string;
}

export interface EngagementData {
  groomName: string;
  brideName: string;
  date: string;
  time: string;
  venue: string;
  contactNumber: string;
  displayMessage: string;
  groomHostsList: string[];
  brideHostsList: string[];
  musicFile: string;
  labels: EngagementLabels;
}

export const engagementDataEn: EngagementData = {
  groomName: "Pratik",
  brideName: "Ritika",
  date: "1st May, 2026",
  time: "6:00 PM Onwards",
  venue: "Lawn No. 2, Kunwar Upawan, Civil Lines, Ballia",
  contactNumber: "+91 9415659717, 9799898315",
  displayMessage: "You are cordially invited",
  groomHostsList: [
    "Mr. Vijendra Pratap Singh",
    "Mrs. Guriya Singh",
    "Aditya Pratap Singh",
    "Mr. Baleshwar Singh",
    "Mrs. Sushila Singh"
  ],
  brideHostsList: [
    "Mr. Anil Kumar Singh",
    "Mrs. Priyanka Singh",
    "Gauravi Singh",
    "Anay Singh"
  ],
  musicFile: "/bg-music.ogg",
  labels: {
    joinUs: "Join us in celebrating the auspicious engagement of",
    twoSouls: "Two souls, one destiny",
    details: "Auspicious Event Details",
    rsvp: "Contact: ",
    brideFamily: "Bride's Family",
    groomFamily: "Groom's Family",
    lookForward: "We eagerly look forward to your gracious presence."
  }
};

export const engagementDataHi: EngagementData = {
  groomName: "प्रतीक",
  brideName: "रितिका",
  date: "1 मई, 2026",
  time: "शाम 6:00 बजे से",
  venue: "लॉन नं. 2, कुंवर उपवन, सिविल लाइन्स, बलिया",
  contactNumber: "+91 9415659717, 9799898315",
  displayMessage: "आप सपरिवार सादर आमंत्रित हैं",
  groomHostsList: [
    "श्री विजेन्द्र प्रताप सिंह",
    "श्रीमती गुड़िया सिंह",
    "आदित्य प्रताप सिंह",
    "श्री बालेश्वर सिंह",
    "श्रीमती सुशीला सिंह"
  ],
  brideHostsList: [
    "श्री अनिल कुमार सिंह",
    "श्रीमती प्रियंका सिंह",
    "गौरवी सिंह",
    "आनय सिंह"
  ],
  musicFile: "/bg-music.mp3",
  labels: {
    joinUs: "के पावन सगाई समारोह में",
    twoSouls: "दो आत्माओं का मंगल मिलन",
    details: "मांगलिक कार्यक्रम विवरण",
    rsvp: "संपर्क: ",
    brideFamily: "वधु पक्ष",
    groomFamily: "वर पक्ष",
    lookForward: "हमें आपकी गरिमामयी उपस्थिति की प्रतीक्षा रहेगी।"
  }
};
