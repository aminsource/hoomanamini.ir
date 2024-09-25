import { default as dayjs } from 'dayjs'
import duration from 'dayjs/plugin/duration'
import utc from 'dayjs/plugin/utc'
import jalaliday from 'jalaliday'

dayjs.extend(utc)
dayjs.extend(duration)
dayjs.extend(jalaliday)

export const formatDate = (date: number) => dayjs(date).format('MMMM D, YYYY h:mm A')

interface IPersianDateOptions {
  calender?: 'jalali' | 'gregory'
  locale?: 'en' | 'fa'
  format?: string
}

export const persianDate = (
  date = new Date(),
  { calender = 'jalali', locale = 'fa', format = 'YYYY/MM/DD' }: IPersianDateOptions
): string => dayjs(date).calendar(calender).locale(locale).format(format)
