export type Office = {
  id: string
  type: 'Head Office' | 'Corporate Office'
  city: string
  address: string[]
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
  },
]