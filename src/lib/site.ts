export const SITE = {
  name: "Semper Chiropractic",
  phone: "(678) 226-1333",
  phoneRaw: "6782261333",
  phoneE164: "+1-678-226-1333",
  address: "859 Mimosa Blvd, Roswell, GA 30075",
  addressParts: {
    street: "859 Mimosa Blvd",
    city: "Roswell",
    state: "GA",
    zip: "30075",
    country: "US",
    full: "859 Mimosa Blvd, Roswell, GA 30075",
    cityStateZip: "Roswell, GA 30075",
  },
  bookUrl: "https://semperchiropractic.janeapp.com/",
  email: "care@semperchiro.com",
  hours: {
    monThu: "8:00am – 1:00pm, 3:00pm – 6:00pm",
    fri: "8:00am – 1:00pm",
    sat: "Appointment Only",
    sun: "Closed",
  },
  hoursRows: [
    { days: "Mon–Thurs", value: "8:00am – 1:00pm, 3:00pm – 6:00pm" },
    { days: "Friday", value: "8:00am – 1:00pm" },
    { days: "Saturday", value: "Appointment Only" },
    { days: "Sunday", value: "Closed" },
  ],
  credentials: ["Doctor of Chiropractic", "CCSP", "Webster Certified"],
  insurance: ["BCBS", "Aetna", "Cigna", "United Healthcare", "Medicare", "Self Pay"],
  mapsEmbed:
    "https://www.google.com/maps?q=859+Mimosa+Blvd,+Roswell,+GA+30075&output=embed",
  mapsLink: "https://maps.google.com/?q=859+Mimosa+Blvd,+Roswell,+GA+30075",
  googlePlaceId: "ChIJTfqLnraf9YgRA-PMRlZshyw",
  googleReviewsUrl:
    "https://search.google.com/local/reviews?placeid=ChIJTfqLnraf9YgRA-PMRlZshyw",
  googleWriteReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJTfqLnraf9YgRA-PMRlZshyw",
  social: {
    instagram: "https://www.instagram.com/semperchiropractic/",
    facebook: "https://www.facebook.com/SemperChiropractic/",
    linkedin:
      "https://www.linkedin.com/in/thomas-scrimo-dc-ccsp-18255b139",
  },
};

export const OPENING_HOURS_LD = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "08:00",
    closes: "13:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "15:00",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Friday"],
    opens: "08:00",
    closes: "13:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday"],
    opens: "00:00",
    closes: "00:00",
    description: "By appointment only",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday"],
    opens: "00:00",
    closes: "00:00",
    description: "Closed",
  },
];
