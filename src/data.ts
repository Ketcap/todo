export interface TodoInterface{
  id:number;
  value:string;
  isDone:boolean;
}
export interface TodoGroupInterface {
  id: number;
  title: string;
  isFinished: boolean;
  options: TodoInterface[]
}
export type Result = TodoGroupInterface[];

export const result:Result = [
  {
    id:0,
    title: "Foundation",
    isFinished: false,
    options: [
      {
        id: 0,
        value: "Setup vitual office",
        isDone: false,
      },
      {
        id: 1,
        value: "Set misson & vision",
        isDone: false,
      },
      {
        id: 2,
        value: "Select business name",
        isDone: false,
      },
      {
        id: 3,
        value: "Buy domains",
        isDone: false,
      },
    ],
  },
  {
    id:1,
    title: "Discovery",
    isFinished: false,
    options: [
      {
        id: 0,
        value: "Create roadmap",
        isDone: false,
      },
      {
        id: 1,
        value: "Compatitor analysis",
        isDone: false,
      },
    ],
  },
  {
    id:2,
    title: "Delivery",
    isFinished: false,
    options: [
      {
        id: 0,
        value: "Release marketing website",
        isDone: false,
      },
      {
        id: 1,
        value: "Release MVP",
        isDone: false,
      },
    ],
  },
  {
    id:3,
    title: "Foundation",
    isFinished: false,
    options: [
      {
        id: 0,
        value: "Setup vitual office",
        isDone: false,
      },
      {
        id: 1,
        value: "Set misson & vision",
        isDone: false,
      },
      {
        id: 2,
        value: "Select business name",
        isDone: false,
      },
      {
        id: 3,
        value: "Buy domains",
        isDone: false,
      },
    ],
  },
  {
    id:4,
    title: "Discovery",
    isFinished: false,
    options: [
      {
        id: 0,
        value: "Create roadmap",
        isDone: false,
      },
      {
        id: 1,
        value: "Compatitor analysis",
        isDone: false,
      },
    ],
  },
  {
    id:5,
    title: "Delivery",
    isFinished: false,
    options: [
      {
        id: 0,
        value: "Release marketing website",
        isDone: false,
      },
      {
        id: 1,
        value: "Release MVP",
        isDone: false,
      },
    ],
  },
];