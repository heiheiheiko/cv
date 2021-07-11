import i18n from '@/i18n';

const { t } = i18n.global;

function dateDifferenceInMonth(date1: Date, date2: Date): number {
  let months;
  months = (date2.getFullYear() - date1.getFullYear()) * 12;
  months -= date1.getMonth();
  months += date2.getMonth();
  return months <= 0 ? 0 : months;
}

const periodInWords = (startedAt: Date, endedAt: Date): string => {
  const totalMonths = dateDifferenceInMonth(startedAt, endedAt || new Date());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const translatedMonths = `${months} ${t('datetime.month', months)}`;
  const translatedYears = `${years} ${t('datetime.year', years)}`;

  const result = [];
  if (months > 0) { result.push(translatedMonths); }
  if (years > 0) { result.push(translatedYears); }

  return result.join(` ${t('general.and')} `);
};

export {
  dateDifferenceInMonth, periodInWords,
};
