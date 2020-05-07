import { Line } from '../interfaces/line'
import { Station } from '../interfaces/station'

const intersections: Station[] = [
  {
    intersecting: true,
    name: {
      arabic: 'الشهداء',
      english: 'EL-Shohadaa',
    },
  },

  {
    intersecting: true,
    name: {
      arabic: 'جمال عبد الناصر',
      english: 'Gamal Abdel-Nasser',
    },
  },

  {
    intersecting: true,
    name: {
      arabic: 'السادات',
      english: 'El-Sadat',
    },
  },

  {
    intersecting: true,
    name: {
      arabic: 'العتبة',
      english: 'El-Ataba',
    },
  },
]

export const lineOne: Line = {
  direction: {
    start: {
      arabic: 'المرج',
      english: 'El-Marg',
    },
    end: {
      arabic: 'حلوان',
      english: 'Helwan',
    },
  },

  stations: [
    {
      intersecting: false,
      name: {
        arabic: 'المرج الجديدة',
        english: 'El-Marg El-Gededa',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'المرج',
        english: 'El-Marg',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'عزبة النخيل',
        english: 'Ezzbit Al-Nakheel',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'عين شمس',
        english: 'Ain Shams',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'المطرية',
        english: 'EL-Matarya',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'حلمية الزيتون',
        english: 'Helmyet El-Zaytoun',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'حدائق الزيتون',
        english: 'Hadayq El-Zaytoun',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'سرايا القبة',
        english: 'Saraya El-Qobba',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'حمامات القبة',
        english: 'Hadayq El-Qobba',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'كوبري القبة',
        english: 'Kobry El-Qobba',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'منشية الصدر',
        english: 'Manshyat El-Sadr',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'الدمرداش',
        english: 'El-Demerdash',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'غمرة',
        english: 'Ghamra',
      },
    },

    intersections[0],

    {
      intersecting: false,
      name: {
        arabic: 'عرابي',
        english: 'Oraby',
      },
    },

    intersections[1],

    intersections[2],

    {
      intersecting: false,
      name: {
        arabic: 'سعد زغلول',
        english: 'Saad Zaghloul',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'السيدة زينب',
        english: 'El-Sayeda Zainab',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'الملك الصالح',
        english: 'El-Malek El-Saleh',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'ماري جرجس',
        english: 'Mary Gerges',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'الزهراء',
        english: 'El-Zahraa',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'دار السلام',
        english: 'Dar El-Salaam',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'حدائق المعادي',
        english: 'Hadayq El-Maadi',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'المعادي',
        english: 'El-Maadi',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'ثكنات المعادي',
        english: 'Thakanat El-Maadi',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'طره البلد',
        english: 'Tora El-Balad',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'كوتسيكا',
        english: 'Kotseika',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'طره الاسمنت',
        english: 'Tora El-Asmant',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'المعصرة',
        english: 'El-Maasara',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'حدائق حلوان',
        english: 'Hadayq Helwan',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'وادي حوف',
        english: 'Wady Houf',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'جامعة حلوان',
        english: 'Gamet Helwan',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'عين حلوان',
        english: 'Ain Helwan',
      },
    },

    {
      intersecting: false,
      name: {
        arabic: 'حلوان',
        english: 'Helwan',
      },
    },
  ],
}

export const lineTwo: Line = {
  direction: {
    start: {
      arabic: 'شبرا الخيمة',
      english: 'Shoubra El-Khema',
    },
    end: {
      arabic: 'المنيب',
      english: 'El-Monib',
    },
  },

  stations: [
    {
      intersecting: false,
      name: {
        arabic: 'شبرا الخيمة',
        english: 'Shoubra El-Khema',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'الزراعة',
        english: 'El-Zeraa',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'المظلات',
        english: 'El-Mezalat',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'الخلفاوي',
        english: 'El-Khalafawy',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'سانت تريزا',
        english: 'St. Teresa',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'روض الفرج',
        english: 'Roud El-Farag',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'مسرة',
        english: 'Masara',
      },
    },
    intersections[0],
    intersections[3],
    {
      intersecting: false,
      name: {
        arabic: 'محمد نجيب',
        english: 'Mohamed Naguib',
      },
    },
    intersections[2],
    {
      intersecting: false,
      name: {
        arabic: 'الاوبرا',
        english: 'El-Opera',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'الدقي',
        english: 'Dokki',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'البحوث',
        english: 'Bohoth',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'جامعة القاهرة',
        english: 'Gamet El-Qahera',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'فيصل',
        english: 'Faisel',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'الجيزة',
        english: 'EL-Giza',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'أم المصريين',
        english: 'Om El-Masreen',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'ساقية مكي',
        english: 'Saqyet Mekky',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'المنيب',
        english: 'El-Monib',
      },
    },
  ],
}

export const lineThree: Line = {
  direction: {
    start: {
      arabic: 'عدلي منصور',
      english: 'Adly Mansour',
    },
    end: {
      arabic: 'العتبة',
      english: 'Ataba',
    },
  },

  stations: [
    {
      intersecting: false,
      name: {
        arabic: 'نادي الشمس',
        english: 'Nady El-Shams',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'ألف مسكن',
        english: 'Alf Maskan',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'هليوبوليس',
        english: 'Heliopolis',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'هارون',
        english: 'Haroun',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'الأهرام',
        english: 'El-Ahram',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'كلية البنات',
        english: 'Kolyet El-Banat',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'الأستاد',
        english: 'El-Estad',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'أرض المعارض',
        english: 'Ard El-Maared',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'العباسية',
        english: 'El Abaasya',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'عبده باشا',
        english: 'Abdo Basha',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'الجيش',
        english: 'El-Gesh',
      },
    },
    {
      intersecting: false,
      name: {
        arabic: 'باب الشعرية',
        english: 'Bab El-Sherya',
      },
    },
    intersections[3],
    intersections[1],
  ],
}

export const lines = [
  ...lineOne.stations,
  ...lineTwo.stations,
  ...lineThree.stations,
]
