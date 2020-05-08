import { Line } from '../interfaces/line'
import { Station } from '../interfaces/station'

const intersections: Station[] = [
  {
    intersecting: true,
    name: {
      arabic: 'الشهداء',
      english: 'EL-Shohadaa',
    },
    line: [1, 2, 3],
  },

  {
    intersecting: true,
    name: {
      arabic: 'جمال عبد الناصر',
      english: 'Gamal Abdel-Nasser',
    },
    line: [1, 2],
  },

  {
    intersecting: true,
    name: {
      arabic: 'السادات',
      english: 'El-Sadat',
    },
    line: [1, 2],
  },

  {
    intersecting: true,
    name: {
      arabic: 'العتبة',
      english: 'El-Ataba',
    },
    line: [1, 2, 3],
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
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'المرج',
        english: 'El-Marg',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'عزبة النخيل',
        english: 'Ezzbit Al-Nakheel',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'عين شمس',
        english: 'Ain Shams',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'المطرية',
        english: 'EL-Matarya',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'حلمية الزيتون',
        english: 'Helmyet El-Zaytoun',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'حدائق الزيتون',
        english: 'Hadayq El-Zaytoun',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'سرايا القبة',
        english: 'Saraya El-Qobba',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'حمامات القبة',
        english: 'Hadayq El-Qobba',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'كوبري القبة',
        english: 'Kobry El-Qobba',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'منشية الصدر',
        english: 'Manshyat El-Sadr',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'الدمرداش',
        english: 'El-Demerdash',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'غمرة',
        english: 'Ghamra',
      },
      line: [1],
    },

    intersections[0],

    {
      intersecting: false,
      name: {
        arabic: 'عرابي',
        english: 'Oraby',
      },
      line: [1],
    },

    intersections[1],

    intersections[2],

    {
      intersecting: false,
      name: {
        arabic: 'سعد زغلول',
        english: 'Saad Zaghloul',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'السيدة زينب',
        english: 'El-Sayeda Zainab',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'الملك الصالح',
        english: 'El-Malek El-Saleh',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'ماري جرجس',
        english: 'Mary Gerges',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'الزهراء',
        english: 'El-Zahraa',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'دار السلام',
        english: 'Dar El-Salaam',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'حدائق المعادي',
        english: 'Hadayq El-Maadi',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'المعادي',
        english: 'El-Maadi',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'ثكنات المعادي',
        english: 'Thakanat El-Maadi',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'طره البلد',
        english: 'Tora El-Balad',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'كوتسيكا',
        english: 'Kotseika',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'طره الاسمنت',
        english: 'Tora El-Asmant',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'المعصرة',
        english: 'El-Maasara',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'حدائق حلوان',
        english: 'Hadayq Helwan',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'وادي حوف',
        english: 'Wady Houf',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'جامعة حلوان',
        english: 'Gamet Helwan',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'عين حلوان',
        english: 'Ain Helwan',
      },
      line: [1],
    },

    {
      intersecting: false,
      name: {
        arabic: 'حلوان',
        english: 'Helwan',
      },
      line: [1],
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
      line: [2],
    },
    {
      intersecting: false,
      name: {
        arabic: 'الزراعة',
        english: 'El-Zeraa',
      },
      line: [2],
    },
    {
      intersecting: false,
      name: {
        arabic: 'المظلات',
        english: 'El-Mezalat',
      },
      line: [2],
    },
    {
      intersecting: false,
      name: {
        arabic: 'الخلفاوي',
        english: 'El-Khalafawy',
      },
      line: [2],
    },
    {
      intersecting: false,
      name: {
        arabic: 'سانت تريزا',
        english: 'St. Teresa',
      },
      line: [2],
    },
    {
      intersecting: false,
      name: {
        arabic: 'روض الفرج',
        english: 'Roud El-Farag',
      },
      line: [2],
    },
    {
      intersecting: false,
      name: {
        arabic: 'مسرة',
        english: 'Masara',
      },
      line: [2],
    },
    intersections[0],
    intersections[3],
    {
      intersecting: false,
      name: {
        arabic: 'محمد نجيب',
        english: 'Mohamed Naguib',
      },
      line: [2],
    },
    intersections[2],
    {
      intersecting: false,
      name: {
        arabic: 'الاوبرا',
        english: 'El-Opera',
      },
      line: [2],
    },
    {
      intersecting: false,
      name: {
        arabic: 'الدقي',
        english: 'Dokki',
      },
      line: [2],
    },
    {
      intersecting: false,
      name: {
        arabic: 'البحوث',
        english: 'Bohoth',
      },
      line: [2],
    },
    {
      intersecting: false,
      name: {
        arabic: 'جامعة القاهرة',
        english: 'Gamet El-Qahera',
      },
      line: [2],
    },
    {
      intersecting: false,
      name: {
        arabic: 'فيصل',
        english: 'Faisel',
      },
      line: [2],
    },
    {
      intersecting: false,
      name: {
        arabic: 'الجيزة',
        english: 'EL-Giza',
      },
      line: [2],
    },
    {
      intersecting: false,
      name: {
        arabic: 'أم المصريين',
        english: 'Om El-Masreen',
      },
      line: [2],
    },
    {
      intersecting: false,
      name: {
        arabic: 'ساقية مكي',
        english: 'Saqyet Mekky',
      },
      line: [2],
    },
    {
      intersecting: false,
      name: {
        arabic: 'المنيب',
        english: 'El-Monib',
      },
      line: [2],
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
      line: [3],
    },
    {
      intersecting: false,
      name: {
        arabic: 'ألف مسكن',
        english: 'Alf Maskan',
      },
      line: [3],
    },
    {
      intersecting: false,
      name: {
        arabic: 'هليوبوليس',
        english: 'Heliopolis',
      },
      line: [3],
    },
    {
      intersecting: false,
      name: {
        arabic: 'هارون',
        english: 'Haroun',
      },
      line: [3],
    },
    {
      intersecting: false,
      name: {
        arabic: 'الأهرام',
        english: 'El-Ahram',
      },
      line: [3],
    },
    {
      intersecting: false,
      name: {
        arabic: 'كلية البنات',
        english: 'Kolyet El-Banat',
      },
      line: [3],
    },
    {
      intersecting: false,
      name: {
        arabic: 'الأستاد',
        english: 'El-Estad',
      },
      line: [3],
    },
    {
      intersecting: false,
      name: {
        arabic: 'أرض المعارض',
        english: 'Ard El-Maared',
      },
      line: [3],
    },
    {
      intersecting: false,
      name: {
        arabic: 'العباسية',
        english: 'El Abaasya',
      },
      line: [3],
    },
    {
      intersecting: false,
      name: {
        arabic: 'عبده باشا',
        english: 'Abdo Basha',
      },
      line: [3],
    },
    {
      intersecting: false,
      name: {
        arabic: 'الجيش',
        english: 'El-Gesh',
      },
      line: [3],
    },
    {
      intersecting: false,
      name: {
        arabic: 'باب الشعرية',
        english: 'Bab El-Sherya',
      },
      line: [3],
    },
    intersections[3],
  ],
}

export const lines = [
  ...lineOne.stations,
  ...lineTwo.stations,
  ...lineThree.stations,
]
