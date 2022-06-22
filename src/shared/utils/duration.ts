import plugin from 'dayjs/plugin/duration';

export const getDurationFormat = (duration: plugin.Duration): string => {
  if (duration.asYears() > 1) return 'Y[y] M[m]';
  if (duration.asMonths() > 1) return 'M[m] D[d]';
  if (duration.asDays() > 1) return 'D[d] H[h]';
  if (duration.asHours() > 1) return 'HH:mm';
  return 'mm:ss';
};
