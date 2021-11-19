export  default function dataFilter(value, format = 'date') {
  console.log(value)
  const options = {}
  if(format.includes('date')) {
    options.day = 'numeric'
    options.month = 'numeric'
    options.year = 'numeric'
  }
  if(format.includes('time')) {
    options.hour = 'numeric'
    options.minute = 'numeric'
    options.second = 'numeric'
  }
  return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}