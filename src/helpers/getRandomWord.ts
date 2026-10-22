
const words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'TELEFONO',
    'CELULAR',
    'ANIMAL',
    'MANGO',
    'VEHICULO'
]

export function getRandomWord() {

  const randomIndex =  Math.floor(Math.random() * words.length);
    

  return words[randomIndex];
}
