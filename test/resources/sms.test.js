
const BASE = '/sms'
const factory = require('../../lib/resources' + BASE)

describe(BASE, () => {
  const request = {
    get: jest.fn(),
    post: jest.fn(),
    delete: jest.fn()
  }
  const client = factory(request)

  it(`POST ${BASE}/target`, () => {
    const obj = {
      campaignId: 49,
      recipientEmail: 'rec@email.com'
    }
    client.target(obj)
    expect(request.post).toHaveBeenCalledWith(`${BASE}/target`, obj)
  })
})
