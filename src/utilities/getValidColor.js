export const getValidColor = (
  errors,
  touched,
  defaultColor = 'rgba(255, 255, 255, 0.8)'
) => {
  if (
    errors === 'Your password is short' ||
    errors === 'Your password is too long'
  ) {
    return '#F6C23E';
  }
  return touched ? (errors && '#E74A3B') || '#3CBC81' : defaultColor;
};
