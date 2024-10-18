/**
 * Returns the month name key based on the provided month number.
 * The month names correspond to keys for translation purposes (e.g., 'january', 'february').
 *
 * @param {number} monthNumber - The number of the month (1 for January, 2 for February, etc.).
 * @returns {string} The key representing the month name (e.g., 'january', 'february').
 */
export const getMonthLabel = (monthNumber) => {
  const monthNames = {
    1: 'january',
    2: 'february',
    3: 'march',
    4: 'april',
    5: 'may',
    6: 'june',
    7: 'july',
    8: 'august',
    9: 'september',
    10: 'october',
    11: 'november',
    12: 'december',
  };
  return monthNames[monthNumber];
}
