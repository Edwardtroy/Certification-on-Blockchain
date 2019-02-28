export default [{
  'constant': true,
  'inputs': [],
  'name': 'isIssuer',
  'outputs': [
    {
      'name': 'result',
      'type': 'bool'
    }
  ],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'
},
{
  'constant': false,
  'inputs': [
    {
      'name': 'certificationType',
      'type': 'string'
    },
    {
      'name': 'firstName',
      'type': 'string'
    },
    {
      'name': 'lastName',
      'type': 'string'
    },
    {
      'name': 'hashedIdCardNumber',
      'type': 'bytes32'
    },
    {
      'name': 'subject',
      'type': 'string'
    },
    {
      'name': 'awardDate',
      'type': 'string'
    },
    {
      'name': 'expiredDate',
      'type': 'string'
    },
    {
      'name': 'partner',
      'type': 'string'
    }
  ],
  'name': 'issueCertification',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function',
  'signature': '0x22bcda3c'
}]
