const settleSchema = {
  type: 'object',
  properties: {
    context: {
      type: 'object',
      properties: {
        domain: { type: 'string', enum: ['ONDC:NTS10'] },
        action: { type: 'string', enum: ['settle'] },
        core_version: { type: 'string', enum: ['1.0.0'] },
        country: { type: 'string' },
        city: { type: 'string' },
        bap_id: { type: 'string' },
        bap_uri: { type: 'string' },
        bpp_id: { type: 'string' },
        bpp_uri: { type: 'string' },
        transaction_id: { type: 'string' },
        message_id: { type: 'string' },
        timestamp: { type: 'string', format: 'date-time' },
        key: { type: ['null', 'string'] },
        ttl: { type: 'string' },
      },
      required: [
        'domain',
        'country',
        'city',
        'action',
        'core_version',
        'bap_id',
        'bap_uri',
        'bpp_id',
        'bpp_uri',
        'transaction_id',
        'message_id',
        'timestamp',
        'ttl',
      ],
      additionalProperties: false,
    },
    message: {
      type: 'object',
      properties: {
        settlement: {
          type: 'object',
          properties: {
            settlements: {
              type: 'array',
              minItems: 5,
              items: {
                type: 'object',
                properties: {
                  collector_app_id: { type: 'string' },
                  receiver_app_id: { type: 'string' },
                  payer_name: { type: 'string' },
                  payer_address: { type: 'string' },
                  payer_account_no: { type: 'integer' },
                  payer_bank_code: { type: 'string' },
                  payer_virtual_payment_address: { type: 'string' },
                  curr_type: { type: 'string' },
                  amount: {
                    type: 'object',
                    properties: {
                      currency: { type: 'string' },
                      value: { type: 'string' },
                    },
                    required: ['currency', 'value'],
                    additionalProperties: false,
                  },
                  timestamp: { type: 'string', format: 'date-time' },
                  payee_name: { type: 'string' },
                  payee_address: { type: 'string' },
                  payee_account_no: { type: 'string' },
                  payee_bank_code: { type: 'string' },
                  payee_virtual_payment_address: { type: 'string' },
                  payment_type: { type: 'string' },
                  purpose_code: { type: 'string' },
                  payee_account_type: { type: 'string', enum: ['01', '02', '03'] },
                  remarks: {
                    type: 'object',
                    properties: {
                      name: { type: 'string' },
                      code: { type: 'string' },
                    },
                    required: ['name', 'code'],
                    additionalProperties: false,
                  },
                  settlement_id: { type: 'string' },
                  state: { type: ['null', 'string'] },
                  prev_settlement_reference_no: {
                    type: 'array',
                    items: { type: 'string' },
                  },
                  settlement_reference_no: { type: ['null', 'string'] },
                  error_code: { type: ['null', 'string'] },
                  error_message: { type: ['null', 'string'] },
                },
                required: [
                  'collector_app_id',
                  'receiver_app_id',
                  'payer_name',
                  'payer_address',
                  'payer_account_no',
                  'payer_bank_code',
                  'payer_virtual_payment_address',
                  'curr_type',
                  'amount',
                  'timestamp',
                  'payee_name',
                  'payee_address',
                  'payee_account_no',
                  'payee_bank_code',
                  'payee_virtual_payment_address',
                  'payment_type',
                  'purpose_code',
                  'payee_account_type',
                  'state',
                  'remarks',
                  'settlement_id',
                  'settlement_reference_no',
                ],
                additionalProperties: false,
              },
            },
          },
          required: ['settlements'],
          additionalProperties: false,
        },
      },
      required: ['settlement'],
      additionalProperties: false,
    },
  },
  required: ['context', 'message'],
  additionalProperties: false,
}

export default settleSchema
