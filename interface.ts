export interface CoWorkingSpaceItem {
  _id: string,
  name: string,
  address: string,
  tel: string,
  open_time: string,
  close_time: string,
  __v: number,
  id: string,
  image: string
}

export interface BookingItem {
  _id: string,
  bookDate: string,
  user: string,
  coworkingspace: {
    _id: string,
    name: string,
    address: string,
    tel: string,
    id: string
  },
  createdAt: string
}

export interface BookingJson {
  success: boolean,
  count: number,
  data: BookingItem[]
}
  
export interface CoWorkingSpaceJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: CoWorkingSpaceItem[]
}

export interface UserJson {
  success: boolean,
  data: {
    _id: string,
    name: string,
    email: string,
    tel: string,
    role: string,
    createdAt: string,
    __v: number
  }
}

export interface TopOneItem {
  _id: string,
  name: string,
  email: string,
  tel: string,
  role: string,
  countBooking: number,
  createdAt: string,
  __v: number
}

export interface TopOneJson {
  success: boolean,
  data: TopOneItem[]
}