import { parseISO, format, formatDistanceToNow } from 'date-fns'
import { vi } from 'date-fns/locale'

type Props = {
  dateString: string
  className?: string
}

const DateFormater = ({ dateString, className = '' }: Props): JSX.Element => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} className={className}>
      {format(date, 'EEEE, do LLLL yyyy', { locale: vi })} (
      {formatDistanceToNow(date, { includeSeconds: true, locale: vi })} trước)
    </time>
  )
}

export default DateFormater
