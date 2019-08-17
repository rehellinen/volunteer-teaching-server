/**
 *  ValidateMethods.jsthods.js
 *  Create By rehellinen
 *  Create On 2018/10/13 10:24
 */
import { ParamsException } from '../exception'

export class ValidateMethods {
  require (data = {}, field = '', errInfo = '') {
    if (data[field] == null || data[field] === '') {
      this.throw(errInfo || `${field}不能为空`)
    }
  }

  empty (data = {}, field = '', errInfo = '') {
  }

  positiveInt (data = {}, field = '', errInfo = '') {
    if (!/(^[1-9]\d*$)/.test(data[field])) {
      this.throw(errInfo || `${field}必须为正整数`)
    }
  }

  throw (message) {
    throw new ParamsException({
      message
    })
  }
}
