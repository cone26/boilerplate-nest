export class AbstractEntity {
    static create<T>(this: new () => T, partial?: Partial<T>): T {
      return Object.assign(new this(), partial);
    }
  }
  