export interface CoWorkingSpaceItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
}

export interface BookingItem {
  name: string,
  surname: string,
  id: string,
  coworkingspace: string,
  bookDate: string
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