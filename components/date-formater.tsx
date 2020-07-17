import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormater = ({ dateString }: Props): JSX.Element => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

export default DateFormater
