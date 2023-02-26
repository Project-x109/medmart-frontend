import male from '../../../assets/images/images/male.png'
import male2 from '../../../assets/images/images/male2.png'
import female from "../../../assets/images/images/female.png";
import female2 from "../../../assets/images/images/female2.png";
import male3 from '../../../assets/images/images/male3.png'

const AbdiChat={
  id: 1,
  name: "Abdi Mohammed",
  photoUrl: male,
  messages: [
    {
      type: "sent",
      content: "Hey! How are you?",
      timestamp: "3:00 PM"
    },
    {
      type: "received",
      content: "Hey! I'm fine! How about you?",
      timestamp: "3:00 PM"
    }
  ]
}
const userChats = [
  AbdiChat,
  {
    id: 2,
    name: "Hawi",
    photoUrl:female,
    messages: [
      {
        type: "sent",
        content: "Hey! How are you?",
        timestamp: "6:00 PM"
      },
      {
        type: "received",
        content: "Hey! I'm fine!",
        timestamp: "6:20 PM"
      }
    ]
  },
  {
    id: 3,
    name: "Abyalew",
    photoUrl:male2,
    messages: [
      {
        type: "received",
        content: "Yo! What's up?",
        timestamp: "9:00 AM"
      },
      {
        type: "sent",
        content: "Nothing much. What about you?",
        timestamp: "9:10 AM"
      }
    ]
  },
  {
    id: 4,
    name: "Nebiyat",
    photoUrl:female2,
    messages: [
      {
        type: "received",
        content: "Hello!",
        timestamp: "9:00 AM"
      },
      {
        type: "sent",
        content: "Good Morning!",
        timestamp: "9:10 AM"
      }
    ]
  },
  {
    id: 5,
    name: "Nebiyu",
    photoUrl:male3,
    messages: [
      {
        type: "received",
        content: "Hello!",
        timestamp: "9:00 AM"
      },
      {
        type: "sent",
        content: "Good Morning!",
        timestamp: "9:10 AM"
      },
      {
        type: "received",
        content: "Hor gogga",
        timestamp: "11:00 AM"
      }
    ]
  },
  {
    id: 6,
    name: "Amir",
    photoUrl:male3,
    messages: [
      {
        type: "received",
        content: "Hello!",
        timestamp: "9:00 AM"
      },
      {
        type: "sent",
        content: "Good Morning!",
        timestamp: "9:10 AM"
      },
      {
        type: "received",
        content: "Hor gogga",
        timestamp: "11:00 AM"
      }
    ]
  },
  {
    id: 6,
    name: "Hayat",
    photoUrl:male3,
    messages: [
      {
        type: "received",
        content: "Hello!",
        timestamp: "9:00 AM"
      },
      {
        type: "sent",
        content: "Good Morning!",
        timestamp: "9:10 AM"
      },
      {
        type: "received",
        content: "Hor gogga",
        timestamp: "11:00 AM"
      }
    ]
  },{
    id: 7,
    name: "Anisa",
    photoUrl:male3,
    messages: [
      {
        type: "received",
        content: "Hello!",
        timestamp: "9:00 AM"
      },
      {
        type: "sent",
        content: "Good Morning!",
        timestamp: "9:10 AM"
      },
      {
        type: "received",
        content: "Hor gogga",
        timestamp: "11:00 AM"
      }
    ]
  },
  {
    id: 8,
    name: "Tikva",
    photoUrl:male3,
    messages: [
      {
        type: "received",
        content: "Hello!",
        timestamp: "9:00 AM"
      },
      {
        type: "sent",
        content: "Good Morning!",
        timestamp: "9:10 AM"
      },
      {
        type: "received",
        content: "Hor gogga",
        timestamp: "11:00 AM"
      }
    ]
  },
  {
    id: 9,
    name: "Rihanna",
    photoUrl:male3,
    messages: [
      {
        type: "received",
        content: "Hello!",
        timestamp: "9:00 AM"
      },
      {
        type: "sent",
        content: "Good Morning!",
        timestamp: "9:10 AM"
      },
      {
        type: "received",
        content: "Hor gogga",
        timestamp: "11:00 AM"
      }
    ]
  },
  {
    id: 10,
    name: "Yahya",
    photoUrl:male3,
    messages: [
      {
        type: "received",
        content: "Hello!",
        timestamp: "9:00 AM"
      },
      {
        type: "sent",
        content: "Good Morning!",
        timestamp: "9:10 AM"
      },
      {
        type: "received",
        content: "Hor gogga",
        timestamp: "11:00 AM"
      }
    ]
  }
];

export default userChats;
