export type Office = {
  id: string
  type: 'Head Office' | 'Corporate Office' | 'Regional Office'
  city: string
  address: string[]
  x: number
  y: number
  pinColor: string
}

export const offices: Office[] = [
  {
    id: 'erode',
    type: 'Head Office',
    city: 'Erode',
    address: [
      '2/185 Ramnagar',
      'Vaaikaimedu',
      'Perundurai Main Road',
      'Erode - 638052',
      'Tamil Nadu',
    ],
    x: 40.2,
    y: 79.3,
    pinColor: '#10B981',
  },

  {
    id: 'chennai',
    type: 'Corporate Office',
    city: 'Chennai',
    address: [
      'No.1 GST Road',
      'Thailavaram',
      'Potheri',
      'Chennai - 603203',
      'Tamil Nadu',
    ],
    x: 44.8,
    y: 75.4,
    pinColor: '#0EA5E9',
  },

  {
    id: 'jaunpur',
    type: 'Regional Office',
    city: 'Jaunpur',
    address: [
      'Pratap Colony',
      'Near Holy Child School',
      'Ruhatta',
      'Jaunpur - 222002',
      'Uttar Pradesh',
    ],
    x: 46.6,
    y: 37.8,
    pinColor: '#F97316',
  },
]

export const presenceStats = [
  {
    value: '3',
    label: 'Offices',
  },
  {
    value: 'Pan India',
    label: 'Support',
  },
  {
    value: '100+',
    label: 'Industries Served',
  },
  {
    value: '15000+',
    label: 'Customers',
  },
]