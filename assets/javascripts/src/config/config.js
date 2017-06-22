import noteFrequencies from './note-frequencies';
import sounds from './sounds';

export default {
  noteFrequencies,
  sounds: [
    {
      title: 'Sine',
      type: 'built-in',
      value: 'sine',
    },
    {
      title: 'Square',
      type: 'built-in',
      value: 'square',
    },
    {
      title: 'Triangle',
      type: 'built-in',
      value: 'triangle',
    },
    {
      title: 'Horn',
      type: 'custom',
      value: sounds.horn,
    },
    {
      title: 'Sawtooth',
      type: 'built-in',
      value: 'sawtooth',
    },
  ],
  padOctaves: [
    {
      title: '1',
      value: 1,
    },
    {
      title: '2',
      value: 2,
    },
    {
      title: '3',
      value: 3,
    },
    {
      title: '4',
      value: 4,
    },
    {
      title: '5',
      value: 5,
    },
    {
      title: '6',
      value: 6,
    },
    {
      title: '7',
      value: 7,
    },
    {
      title: '8',
      value: 8,
    },
  ],
  keyOctaves: [
    {
      title: '1-2',
      value: [1, 2],
    },
    {
      title: '3-4',
      value: [3, 4],
    },
    {
      title: '5-6',
      value: [5, 6],
    },
    {
      title: '7-8',
      value: [7, 8],
    },
  ],
};
