const tags = {
  1: [
    'one',
    'easy',
    '1',
  ],
  2: [
    'two',
    '2',
  ],
  3: [
    'three',
    '3'
  ],
  5: [
    'five',
    '5'
  ],
  8: [
    'eight',
    '8'
  ],
  13: [
    'thirteen',
    '13',
    'forever',
    'complex',
    'head-scratcher'
  ],
  coffee: [
    'coffee',
    'shitty',
    'unclear'
  ]
};

export const getTag = score => {
  const index = Math.floor(Math.random() * Math.floor(tags[score].length));
  return tags[score][index];
};