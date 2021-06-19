export default {
  title: 'Payment Methods',
  name: 'paymentMethods',
  type: 'object',

  fields: [
    {
      title: 'Visa',
      name: 'visa',
      type: 'boolean',
    },
    {
      title: 'Mastercard',
      name: 'mastercard',
      type: 'boolean',
    },
    {
      title: 'Maestro',
      name: 'maestro',
      type: 'boolean',
    },
    {
      title: 'Amex',
      name: 'amex',
      type: 'boolean',
    },
    {
      title: 'PayPal',
      name: 'payPal',
      type: 'boolean',
    },
    {
      title: 'Apple Pay',
      name: 'applePay',
      type: 'boolean',
    },
    {
      title: 'Google Pay',
      name: 'googlePay',
      type: 'boolean',
    },
    {
      title: 'Klarna - Pay Later',
      name: 'klarnaPayLater',
      type: 'boolean',
    },
    {
      title: 'Klarna - Pay Now',
      name: 'klarnaPayNow',
      type: 'boolean',
    },
    {
      title: 'Klarna - Slice It',
      name: 'klarnaSliceIt',
      type: 'boolean',
    },
    {
      title: 'Coinbase',
      name: 'coinbase',
      type: 'boolean',
    },
    {
      title: 'Invoice for companies',
      name: 'invoiceForCompanies',
      type: 'boolean',
    },
  ],
}