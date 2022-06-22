import dayjs from 'dayjs';
import { getDurationFormat } from './duration';

export const getTimeDiffFormated = (
  startDate: dayjs.Dayjs | string | Date,
  endDate: dayjs.Dayjs | string | Date,
): string => {
  const diff = dayjs(endDate).diff(dayjs(startDate));
  const duration = dayjs.duration(diff);
  const formatedDuration = duration.format(getDurationFormat(duration));
  return formatedDuration;
};
