import { parseISO, format, formatDistanceToNow } from 'date-fns'
import { enUS } from 'date-fns/locale'

type Props = {
  dateString: string
  className?: string
}

const DateFormater = ({ dateString, className = '' }: Props): JSX.Element => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} className={className}>
      {format(date, 'EEEE, do LLLL yyyy', { locale: enUS })} (
      {formatDistanceToNow(date, { includeSeconds: true, locale: enUS })} agos)
    </time>
  )
}

export default DateFormater
