const formatNumericalValue = (value: string): string =>
  value
    .replace(/ */g, '')
    .split('')
    .reverse()
    .map((num, index) => (index % 3 ? num : `${num} `))
    .reverse()
    .join('')
    .trim();

export default formatNumericalValue;
