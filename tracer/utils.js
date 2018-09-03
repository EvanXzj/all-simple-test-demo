const {initTracer} = require('jaeger-client')
const _ = require('lodash')

const config = {
  serviceName: 'rpcClient',
  reporter: {
    logSpan: true
  },
  sampler: {
    type: 'const',
    param: 1
  }
}

const options = {
  logger: {
    info(msg) {
      console.log('INFO', msg)
    },
    error(msg) {
      console.error('ERROR', msg)
    }
  }
}

/**
 * @description export the globalTracer object
 */
exports.tracer = initTracer(config, options)

/**
 * @description createSpan
 * @param cfg
 * @param opts
 * @returns span
 */
exports.createSpan = function (name, cfg = {}) {
  return exports.tracer.startSpan(name, _.extend({}, cfg))
}