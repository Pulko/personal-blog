import { format } from 'date-fns'

const DateString = ({ dateString }) => (
  <time dateTime={dateString}>
    {format(new Date(dateString), 'LLLL	d, yyyy')}
  </time>
)

export default DateString
