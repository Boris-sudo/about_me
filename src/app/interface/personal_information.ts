export interface Info {
  school: string;
  grade: number;
  name: string;
  surname: string;
  age: number;
  born_date: string;
  hobby: string[];
}

export const Self: Info = {
  school: 'Летово',
  grade: 9,
  name: 'Борис',
  surname: 'Кива',
  age: 15,
  born_date: '26.11.2007',
  hobby: ['программирование', 'математика', 'физика', 'футболл', 'шахматы'],
}
