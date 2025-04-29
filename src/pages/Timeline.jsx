// src/pages/Timeline.jsx
import { useState } from 'react'
import TimelineItem from '../components/TimelineItem'
import TimelineFilter from '../components/TimelineFilter'
import { historicalEvents } from '../data/events'
import './Timeline.css'

// Приклад даних про історичні події
const historicalEvents = [
  {
    id: 1,
    title: "Заснування Києва",
    year: "482 р.",
    image: "https://www.historyua.com/wp-content/uploads/2018/05/Kyj-SHHehHoryv-Lybid-Istoriya-v-shkoli.jpg",
    isModern: false
  },
  {
    id: 2,
    title: "Хрещення Русі",
    year: "988 р.",
    image: "https://img.tsn.ua/cached/364/tsn-84ee4f9844c21d3af2b3cfbad2c9c711/thumbs/1200x630/d8/ad/eed56b8c06810d354e678391884cadd8.jpeg",
    isModern: false
  },
  {
    id: 3,
    title: "Битва під Грюнвальдом",
    year: "1410 р.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jan_Matejko%2C_Bitwa_pod_Grunwaldem.jpg/960px-Jan_Matejko%2C_Bitwa_pod_Grunwaldem.jpg",
    isModern: false
  },
  {
    id: 4,
    title: "Утворення Запорізької Січі",
    year: "1552 р.",
    image: "https://myukraine.org.ua/wp-content/uploads/2016/12/kozaky-min-e1505162067659.jpg",
    isModern: false
  },
  {
    id: 5,
    title: "Переяславська рада",
    year: "1654 р.",
    image: "https://upload.wikimedia.org/wikipedia/ru/a/ab/%D0%9D%D0%B0%D0%B2%D0%B5%D0%BA%D0%B8_%D1%81_%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%BE%D0%B9.jpg",
    isModern: false
  },
  {
    id: 6,
    title: "Скасування кріпосного права",
    year: "1861 р.",
    image: "https://www.dsnews.ua/static/storage/thumbs/1200x630/4/7d/c5a652fb-4febb4e30893e061bb4c2ca8ac5ec7d4.jpg?v=9982_1",
    isModern: false
  },
  {
    id: 7,
    title: "Проголошення УНР",
    year: "1917 р.",
    image: "https://www.uinp.gov.ua/storage/app/public/uploads/2019-11-20/10/d2b1574239270JDH.jpeg",
    isModern: false
  },
  {
    id: 8,
    title: "Акт Злуки",
    year: "1919 р.",
    image: "https://static.espreso.tv/uploads/article/2596445/images/im-zluka_nbuv.gov.png",
    isModern: false
  },
  {
    id: 9,
    title: "Голодомор",
    year: "1932-1933 рр.",
    image: "https://4vlada.com/sites/default/files/2019-11/24021389%5B1%5D.jpg",
    isModern: false
  },
  {
    id: 10,
    title: "Друга світова війна",
    year: "1939-1945 рр.",
    image: "https://institutedd.org/storage/thumbnails/2w84LxwaLmh5jLrz1sm9ieMs5LpoYdS7LtrcvwE2.jpeg",
    isModern: false
  },
  {
    id: 11,
    title: "Чорнобильська катастрофа",
    year: "1986 р.",
    image: "https://sd.ua/files/news/25/chernobyl-3.jpg",
    isModern: false
  },
  {
    id: 12,
    title: "Проголошення незалежності України",
    year: "1991 р.",
    image: "https://cdn.fakty.com.ua/wp-content/uploads/2021/07/28/nezalezhnist.jpg",
    isModern: true
  },
  {
    id: 13,
    title: "Помаранчева революція",
    year: "2004 р.",
    image: "https://foreignukraines.com/wp-content/uploads/2020/12/2.jpg?w=1024",
    isModern: true
  },
  {
    id: 14,
    title: "Революція Гідності",
    year: "2013-2014 рр.",
    image: "https://www.khm.gov.ua/sites/default/files/470193947-e1519653914356.jpg",
    isModern: true
  },
  {
    id: 15,
    title: "Початок російсько-української війни",
    year: "2014 р.",
    image: "https://static.ukrinform.com/photos/2024_02/1708422868-767.jpg",
    isModern: true
  },
  {
    id: 16,
    title: "Повномасштабне вторгнення Росії",
    year: "2022 р.",
    image: "https://static.ukrinform.com/photos/2023_08/thumb_files/630_360_1692810386-322.jpg",
    isModern: true
  }
]

function Timeline() {
  return (
    <div className="container">
      <h1>Хронологія українських історичних подій</h1>
      <p>Події 21 століття виділені кольором</p>
      
      <div className="timeline-container">
        <div className="timeline">
          {historicalEvents.map(event => (
            <TimelineItem
              key={event.id}
              title={event.title}
              image={event.image}
              year={event.year}
              isModern={event.isModern}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
const periods = [
    { id: 'all', name: 'Усі періоди' },
    { id: 'ancient', name: 'Стародавній світ (до V ст.)' },
    { id: 'middle', name: 'Середньовіччя (V-XV ст.)' },
    { id: 'new', name: 'Новий час (XVI-XIX ст.)' },
    { id: 'modern', name: 'Новітня історія (XX-XXI ст.)' }
  ]
  
  function Timeline() {
    const [filter, setFilter] = useState('all')
  
    const filteredEvents = historicalEvents.filter(event => {
      if (filter === 'all') return true
      if (filter === 'ancient') return event.century.includes('V') || event.century.includes('VI')
      if (filter === 'middle') return event.century.includes('X') || event.century.includes('XV')
      if (filter === 'new') return event.century.includes('XVI') || event.century.includes('XVII') || event.century.includes('XVIII') || event.century.includes('XIX')
      if (filter === 'modern') return event.century.includes('XX') || event.century.includes('XXI')
      return true
    })
  
    return (
      <div className="timeline-page">
        <div className="container">
          <h1>Хронологія української історії</h1>
          
          <TimelineFilter 
            periods={periods} 
            activeFilter={filter}
            onFilterChange={setFilter}
          />
          
          <div className="timeline-container">
            {filteredEvents.map(event => (
              <TimelineItem 
                key={event.id}
                event={event}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Timeline
