/**
 * Maximum possible value for a 24-bit RGB color (16,777,216 colors).
 */
const MAX_COLOR_VALUE = 16777216;

/**
 * Generates a random hex color code.
 *
 * @returns {string} A random color in hex format (e.g., "#a3c113").
 */

export const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * MAX_COLOR_VALUE);

  const hexColor = `#${randomColor.toString(16).padStart(6, '0')}`;

  return hexColor;
}
