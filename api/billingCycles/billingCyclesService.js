// Criação dos Métodos da API

const BillingCycles = require('./billingCycles')

BillingCycles.methods(['get', 'post', 'put', 'delete'])
BillingCycles.updateOptions({new: true, runValidators: true})

module.exports = BillingCycles
