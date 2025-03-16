import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.events': 'Events',
    'nav.volunteer': 'Volunteer',
    'nav.contact': 'Contact',
    'nav.donate': 'Donate',
    
    // Donate page
    'donate.title': 'Support Our Elderly',
    'donate.subtitle': 'Your contribution helps provide care, comfort, and community to seniors in need.',
    'donate.banner.title': 'Give the Gift of Dignity and Care',
    'donate.banner.subtitle': 'Your donations directly support our mission to provide a loving home for the elderly.',
    'donate.why.title': 'Why Your Support Matters',
    'donate.why.description': 'At Rupvan Foundation\'s Old Age Home, we provide a loving environment for elderly individuals who need care and companionship. Your donations directly impact the quality of life for our residents by helping us provide:',
    'donate.why.item1': 'Nutritious meals and dietary care',
    'donate.why.item2': 'Medical attention and health services',
    'donate.why.item3': 'Recreational activities and social engagement',
    'donate.why.item4': 'Comfortable living spaces and facilities',
    'donate.why.item5': 'Emotional support and companionship',
    'donate.supporting': 'Currently Supporting',
    'donate.residents': '50+ Elderly Residents',
    'donate.bank.title': 'Bank Details for Donations',
    'donate.bank.account': 'Account Information',
    'donate.bank.name': 'Account Name:',
    'donate.bank.number': 'Account Number:',
    'donate.bank.bankname': 'Bank Name:',
    'donate.bank.ifsc': 'IFSC Code:',
    'donate.bank.branch': 'Branch:',
    'donate.contact.title': 'Contact for Donation',
    'donate.contact.phone': 'Phone:',
    'donate.contact.email': 'Email:',
    'donate.tax.title': 'Tax Benefits',
    'donate.tax.description': 'All donations to Rupvan Foundation are eligible for tax exemption under Section 80G of the Income Tax Act.',
    'donate.impact.title': 'Impact Stories',
    'donate.impact.story1': '"The support from Rupvan Foundation has transformed my life. After losing my family, I found a new home here with care, love, and dignity. The staff and volunteers have become my family, and I am grateful for every donor who makes this possible."',
    'donate.impact.person1': '- Rajesh Kumar, 78, Resident',
    'donate.impact.story2': '"When my mother needed care that I couldn\'t provide, Rupvan Foundation became her second home. The quality of care, the warmth of the staff, and the dignity with which they treat every resident is remarkable. Your donations truly make a difference."',
    'donate.impact.person2': '- Priya Sharma, Family Member',
    'donate.promise.title': 'Our Promise',
    'donate.promise.description': 'We promise to use every donation responsibly and transparently to improve the lives of our elderly residents.',
    'donate.cta.title': 'Make a Difference Today',
    'donate.cta.description': 'Every contribution, no matter how small, helps us provide better care for our elderly residents.',
    'donate.cta.button': 'Donate Now',
  },
  hi: {
    // Navbar
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.events': 'कार्यक्रम',
    'nav.volunteer': 'स्वयंसेवक',
    'nav.contact': 'संपर्क',
    'nav.donate': 'दान करें',
    
    // Donate page
    'donate.title': 'हमारे बुजुर्गों का समर्थन करें',
    'donate.subtitle': 'आपका योगदान वरिष्ठ नागरिकों को देखभाल, आराम और समुदाय प्रदान करने में मदद करता है।',
    'donate.banner.title': 'गरिमा और देखभाल का उपहार दें',
    'donate.banner.subtitle': 'आपका दान सीधे हमारे मिशन का समर्थन करता है जो बुजुर्गों के लिए एक प्यार भरा घर प्रदान करता है।',
    'donate.why.title': 'आपका समर्थन क्यों मायने रखता है',
    'donate.why.description': 'रूपवन फाउंडेशन के वृद्धाश्रम में, हम बुजुर्ग व्यक्तियों के लिए एक प्यार भरा वातावरण प्रदान करते हैं जिन्हें देखभाल और साथ की आवश्यकता होती है। आपका दान हमारे निवासियों के जीवन की गुणवत्ता पर सीधा प्रभाव डालता है, जिससे हमें निम्नलिखित प्रदान करने में मदद मिलती है:',
    'donate.why.item1': 'पौष्टिक भोजन और आहार संबंधी देखभाल',
    'donate.why.item2': 'चिकित्सा ध्यान और स्वास्थ्य सेवाएं',
    'donate.why.item3': 'मनोरंजक गतिविधियां और सामाजिक जुड़ाव',
    'donate.why.item4': 'आरामदायक रहने की जगह और सुविधाएं',
    'donate.why.item5': 'भावनात्मक समर्थन और साथ',
    'donate.supporting': 'वर्तमान में समर्थन',
    'donate.residents': '50+ बुजुर्ग निवासी',
    'donate.bank.title': 'दान के लिए बैंक विवरण',
    'donate.bank.account': 'खाता जानकारी',
    'donate.bank.name': 'खाता नाम:',
    'donate.bank.number': 'खाता संख्या:',
    'donate.bank.bankname': 'बैंक का नाम:',
    'donate.bank.ifsc': 'IFSC कोड:',
    'donate.bank.branch': 'शाखा:',
    'donate.contact.title': 'दान के लिए संपर्क',
    'donate.contact.phone': 'फोन:',
    'donate.contact.email': 'ईमेल:',
    'donate.tax.title': 'कर लाभ',
    'donate.tax.description': 'रूपवन फाउंडेशन को किए गए सभी दान आयकर अधिनियम की धारा 80G के तहत कर छूट के लिए पात्र हैं।',
    'donate.impact.title': 'प्रभाव की कहानियां',
    'donate.impact.story1': '"रूपवन फाउंडेशन के समर्थन ने मेरे जीवन को बदल दिया है। अपने परिवार को खोने के बाद, मुझे यहां देखभाल, प्यार और सम्मान के साथ एक नया घर मिला। स्टाफ और स्वयंसेवक मेरे परिवार बन गए हैं, और मैं हर उस दाता के लिए आभारी हूं जो इसे संभव बनाता है।"',
    'donate.impact.person1': '- राजेश कुमार, 78, निवासी',
    'donate.impact.story2': '"जब मेरी मां को ऐसी देखभाल की आवश्यकता थी जो मैं प्रदान नहीं कर सकता था, रूपवन फाउंडेशन उनका दूसरा घर बन गया। देखभाल की गुणवत्ता, स्टाफ की गर्मजोशी, और जिस गरिमा के साथ वे हर निवासी का इलाज करते हैं, वह उल्लेखनीय है। आपका दान वास्तव में एक अंतर लाता है।"',
    'donate.impact.person2': '- प्रिया शर्मा, परिवार के सदस्य',
    'donate.promise.title': 'हमारा वादा',
    'donate.promise.description': 'हम वादा करते हैं कि हम हर दान का उपयोग जिम्मेदारी से और पारदर्शी रूप से अपने बुजुर्ग निवासियों के जीवन को बेहतर बनाने के लिए करेंगे।',
    'donate.cta.title': 'आज ही अंतर लाएं',
    'donate.cta.description': 'हर योगदान, चाहे वह कितना भी छोटा हो, हमें अपने बुजुर्ग निवासियों के लिए बेहतर देखभाल प्रदान करने में मदद करता है।',
    'donate.cta.button': 'अभी दान करें',
  },
  mr: {
    // Navbar
    'nav.home': 'मुख्यपृष्ठ',
    'nav.about': 'आमच्याबद्दल',
    'nav.events': 'कार्यक्रम',
    'nav.volunteer': 'स्वयंसेवक',
    'nav.contact': 'संपर्क',
    'nav.donate': 'दान करा',
    
    // Donate page
    'donate.title': 'आमच्या वृद्धांना सहाय्य करा',
    'donate.subtitle': 'तुमचे योगदान ज्येष्ठ नागरिकांना काळजी, आराम आणि समुदाय प्रदान करण्यास मदत करते.',
    'donate.banner.title': 'सन्मान आणि काळजीचे उपहार द्या',
    'donate.banner.subtitle': 'तुमचे दान थेट आमच्या मिशनला समर्थन देते जे वृद्धांसाठी एक प्रेमळ घर प्रदान करते.',
    'donate.why.title': 'तुमचे समर्थन का महत्त्वाचे आहे',
    'donate.why.description': 'रूपवन फाउंडेशनच्या वृद्धाश्रमात, आम्ही वृद्ध व्यक्तींसाठी एक प्रेमळ वातावरण प्रदान करतो ज्यांना काळजी आणि सोबतीची आवश्यकता असते. तुमचे दान आमच्या निवासींच्या जीवनाच्या गुणवत्तेवर थेट प्रभाव टाकते, ज्यामुळे आम्हाला पुढील गोष्टी प्रदान करण्यास मदत होते:',
    'donate.why.item1': 'पौष्टिक जेवण आणि आहार काळजी',
    'donate.why.item2': 'वैद्यकीय लक्ष आणि आरोग्य सेवा',
    'donate.why.item3': 'मनोरंजक उपक्रम आणि सामाजिक सहभाग',
    'donate.why.item4': 'आरामदायक राहण्याची जागा आणि सुविधा',
    'donate.why.item5': 'भावनिक समर्थन आणि सोबत',
    'donate.supporting': 'सध्या समर्थन',
    'donate.residents': '50+ वृद्ध निवासी',
    'donate.bank.title': 'दानासाठी बँक तपशील',
    'donate.bank.account': 'खाते माहिती',
    'donate.bank.name': 'खाते नाव:',
    'donate.bank.number': 'खाते क्रमांक:',
    'donate.bank.bankname': 'बँकेचे नाव:',
    'donate.bank.ifsc': 'IFSC कोड:',
    'donate.bank.branch': 'शाखा:',
    'donate.contact.title': 'दानासाठी संपर्क',
    'donate.contact.phone': 'फोन:',
    'donate.contact.email': 'ईमेल:',
    'donate.tax.title': 'कर फायदे',
    'donate.tax.description': 'रूपवन फाउंडेशनला केलेली सर्व दाने आयकर कायद्याच्या कलम 80G अंतर्गत कर सूट पात्र आहेत.',
    'donate.impact.title': 'प्रभावाच्या कथा',
    'donate.impact.story1': '"रूपवन फाउंडेशनच्या समर्थनाने माझे आयुष्य बदलले आहे. माझे कुटुंब गमावल्यानंतर, मला इथे काळजी, प्रेम आणि सन्मानासह एक नवीन घर मिळाले. कर्मचारी आणि स्वयंसेवक माझे कुटुंब बनले आहेत, आणि मी प्रत्येक दात्याचा आभारी आहे जो हे शक्य करतो."',
    'donate.impact.person1': '- राजेश कुमार, 78, निवासी',
    'donate.impact.story2': '"जेव्हा माझ्या आईला अशी काळजी हवी होती जी मी देऊ शकत नव्हतो, तेव्हा रूपवन फाउंडेशन तिचे दुसरे घर बनले. काळजीची गुणवत्ता, कर्मचाऱ्यांची उष्णता, आणि ज्या सन्मानाने ते प्रत्येक निवासीशी वागतात ते उल्लेखनीय आहे. तुमचे दान खरोखर फरक करते."',
    'donate.impact.person2': '- प्रिया शर्मा, कुटुंब सदस्य',
    'donate.promise.title': 'आमचे वचन',
    'donate.promise.description': 'आम्ही वचन देतो की आम्ही प्रत्येक दानाचा वापर जबाबदारीने आणि पारदर्शकपणे आमच्या वृद्ध निवासींचे जीवन सुधारण्यासाठी करू.',
    'donate.cta.title': 'आज फरक करा',
    'donate.cta.description': 'प्रत्येक योगदान, किती ही लहान असले तरी, आम्हाला आमच्या वृद्ध निवासींसाठी चांगली काळजी घेण्यास मदत करते.',
    'donate.cta.button': 'आता दान करा',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 