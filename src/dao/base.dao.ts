import { Model } from 'mongoose';

export class BaseDao<T> {
  repo: Model<T>;
  constructor(repo: Model<T>) {
    this.repo = repo;
  }
  insert(info: T) {
    return new this.repo(info).save();
  }
  findAll() {
    return this.repo.find();
  }
}
