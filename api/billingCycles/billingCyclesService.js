// Criação dos Métodos da API

const BillingCycles = require('./billingCycles')

BillingCycles.methods(['get', 'post', 'put', 'delete'])
BillingCycles.updateOptions({new: true, runValidators: true})

BillingCycles.route('count', function(req, res, next) {
  BillingCycles.count(function(error, value) {
    if(error) {
      res.status(500).json({erros: [error]})
    } else {
      res.json({value})
    }
  })
})

module.exports = BillingCycles
