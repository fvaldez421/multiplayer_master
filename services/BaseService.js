import mongoose from "mongoose";

/**
 * Base service to be used for data interaction
 */
class BaseService {
  constructor(model) {
    this.model = model;
    this.find = this.find.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async find(query) {
    const result = { statusCode: 200, error: false };
    try {
      const { skip = 0, limit = 25, id, ...sanitizedQuery } = query;

      if (id) sanitizedQuery._id = new mongoose.mongo.ObjectId(id);
      const entities = await this.model
        .find(sanitizedQuery)
        .skip(skip)
        .limit(limit);
      result.data = entities;
      result.total = await this.model.countDocuments();
    } catch (error) {
      console.log(`[Base Service Error]: ${error}`);
      result.error = error;
      result.statusCode = 500;
    }
    return result;
  }

  async insert(body) {
    console.log(body)
    const result = { statusCode: 202, error: false };
    try {
      const entity = await this.model.create(body);
      result.entity = entity;
    } catch (error) {
      console.log(`[Base Service Error]: ${error}`);
      result.error = error;
      result.statusCode = 500;
    }
    return result;
  }

  async update({ _id }, body) {
    const result = { statusCode: 202, error: false };
    try {
      const entity = await this.model.findByIdAndUpdate(_id, body, { new: true });
      if (entity) {
        result.entity = entity;
        result.updated = true;
      } else {
        result.statusCode = 404;
        result.error = 'Not found.';
      }
    } catch (error) {
      console.log(`[Base Service Error]: ${error}`);
      result.error = error;
      result.statusCode = 500;
    }
    return result;
  }

  async delete(params) {
    const result = { statusCode: 202, error: false };
    try {
      const entity = await this.model.deleteOne(params);
      if (entity) {
        result.entity = entity;
        result.deleted = true;
      } else {
        result.error = "Not found."
        result.statusCode = 404;
      }
    } catch (error) {
      console.log(`[Base Service Error]: ${error}`);
      result.statusCode = 500;
      result.error = error;
    }
    return result;
  }
}


export default BaseService;