interface EngagementLabels {
  joinUs: string;
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
  time: "6:00 PM",
  venue: "Lawn no. 1, Kunwar Upawan, Civil Lines, Ballia",
  contactNumber: "+91 94502 23592",
  displayMessage: "Pratik and Ritika's Auspicious Engagement",
  groomHostsList: [
    "Vijendra Pratap Singh, Lecturer at Kunwar Singh Inter College, Ballia",
    "Guriya Singh",
    "Aditya Pratap Singh"
  ],
  brideHostsList: [
    "Anil Kumar Singh",
    "Priyanka Singh",
    "Gauravi Singh",
    "Anay Singh"
  ],
  musicFile: "/bg-music.ogg",
  labels: {
    joinUs: "ki madhurmay sagaai ki paavan vela par",
    details: "Karyakram Sthaal",
    rsvp: "Phone: ",
    brideFamily: "Swagatakanshi",
    groomFamily: "Groom's Family",
    lookForward: "We eagerly look forward to your gracious presence."
  }
};

export const engagementDataHi: EngagementData = {
  groomName: "प्रतीक",
  brideName: "रितिका",
  date: "1 मई, 2026",
  time: "शाम 6:00 बजे",
  venue: "लॉन नं. 1, कुंवर उपवन, सिविल लाइन्स, बलिया ",
  contactNumber: "+91 94502 23592",
  displayMessage: "प्रतीक और रितिका की मधुर सगाई",
  groomHostsList: [
    "विजेन्द्र प्रताप सिंह, प्रवक्ता,  कुंवर सिंह इंटर कॉलेज, बलिया",
    "श्रीमती गुड़िया सिंह",
    "आदित्य प्रताप सिंह"
  ],
  brideHostsList: [
    "अनिल कुमार सिंह",
    "श्रीमती प्रियंका सिंह",
    "गौरवी सिंह",
    "अनय सिंह"
  ],
  musicFile: "/bg-music.mp3",
  labels: {
    joinUs: "की मधुरमय सगाई की पावन वेला पर",
    details: "कार्यक्रम स्थल",
    rsvp: "फोन: ",
    brideFamily: "स्वागताकांक्षी",
    groomFamily: "वर पक्ष",
    lookForward: "मे आपकी उपस्थिति सादर निवेदित है।"
  }
};
