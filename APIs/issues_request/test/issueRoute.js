const chai = require('chai')
const axios = require('axios')
const expect = chai.expect

const urlBase = 'issue_api:3002/routes'
const token = require('../../constants')
const urlEndpoint = urlBase + '?owner=fga-eps-mds&repository=2019.2-Git-Breakdown=' + token
const url = urlBase + '?owner=f'

describe('Issues route tests', () => {
  it('Test: Request valid', (done) => {
    axios.get(urlEndpoint).then(response => {

        let _body = {}
        try{
          _body = response.data
        }
        catch(e){
          _body = {}
        }

        expect(response.status).to.equal(200);
        body.should.have.property('open');
      }
    ).catch(err => {
      console.log(err)
    })
    done()
  })

  it('Test: Request without parameters', (done) => {
    axios.get(urlBase).then(response => {

        let _body = {};
        try{
          _body = response.data
        }
        catch(e){
          _body = {}
        }
      }
    ).catch(err => {
      expect(err.response.status).to.equal(400);
    })
    done()
  }) 
})