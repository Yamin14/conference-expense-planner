
import cr from '../../public/conference-room.jpeg'
import ah from '../../public/auditorium-hall.jpeg'
import pr from '../../public/presentation-room.jpeg'
import lmr from '../../public/large-meeting-room.jpeg'
import smr from '../../public/small-meeting-room.jpeg'

const rooms = [{
    name: "Conference Room",
    img: cr,
    capacity: 15,
    price: 1500,
    quantity: 0
  },
  {
    name: "Auditorium Hall",
    img: ah,
    capacity: 200,
    price: 5500,
    quantity: 0
  },
  {
    name: "Presentation Room",
    img: pr,
    capacity: 50,
    price: 3500,
    quantity: 0
  },
  {
    name: "Large Meeting Room",
    img: lmr,
    capacity: 10,
    price: 1000,
    quantity: 0
  },
  {
    name: "Small Meeting Room",
    img: smr,
    capacity: 5,
    price: 800,
    quantity: 0
  }];

  export default rooms;