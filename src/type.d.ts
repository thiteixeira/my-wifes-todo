type Action<T extends string = string, P = unknown> = {
  readonly type: T;
  readonly payload?: P;
};

interface ITodo {
  id: string;
  date: string;
  type: IconNames;
  description: string;
  isPriority: boolean;
  isCompleted: boolean;
}
