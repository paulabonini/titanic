export interface Passenger {
  id: number
  survived: number
  pclass: number
  name: string
  sex: string
  age: number | null
  sibSp: number
  parch: number
  ticket: string
  fare: number | null
  cabin: string | null
  embarked: string
}
