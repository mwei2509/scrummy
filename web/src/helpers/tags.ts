interface tagCollection {
  [key:string]: string[]
}
const tags:tagCollection = {
  '1': [
    'one',
    'easy',
    '1',
  ],
  '2': [
    'two',
    '2',
  ],
  '3': [
    'three',
    '3'
  ],
  '5': [
    'five',
    '5'
  ],
  '8': [
    'eight',
    '8'
  ],
  '13': [
    'thirteen',
    '13',
    'forever',
    'complex',
    'head-scratcher'
  ],
  'coffee': [
    'coffee',
    'shitty',
    'unclear'
  ]
};

export function getTag (score:any): string {
  const index = Math.floor(Math.random() * Math.floor(tags[score].length));
  return tags[score][index];
};