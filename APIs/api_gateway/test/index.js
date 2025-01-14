const chai = require('chai')
const assert = chai.assert
const request = require('request')
const expect = chai.expect

describe('API Gateway integration tests', () => {
    let urlBase = 'http://localhost:3000'
    let urlParams = '?owner=fga-eps-mds&repository=2019.2-Git-Breakdown'
    
    it('/commits: valid request', async () => {
        await request.get( {
            url : urlBase+'/commits'+urlParams
        }, (error, response, body) => {
                let _body = {}
                try{
                  _body = JSON.parse(body)
                }
                catch(e){
                  _body = {}
                }
                if(response.status != undefined)
                    expect(response.status).to.equal(200)
            }
        )
    })
    it('/commits: invalid request', async () => {
        await request.get( {
            url : urlBase+'/commits'
        }, (error, response, body) => {
                let _body = {}
                try{
                  _body = JSON.parse(body)
                }
                catch(e){
                  _body = {}
                }
                if(response.statusCode != undefined)
                    expect(response.statusCode).to.equal(400)
            }
        )
    })
    
    it('/issues: valid request', async () => {
        await request.get( {
            url : urlBase+'/issues'+urlParams
        }, (error, response, body) => {
                let _body = {}
                try{
                  _body = JSON.parse(body)
                }
                catch(e){
                  _body = {}
                }
                if(response.status != undefined)
                    expect(response.status).to.equal(200)
                if(_body.open != undefined){
                    expect(_body).to.have.property('open')
                    expect(_body).to.have.property('closed')
                    expect(_body).to.have.property('openPercent')
                    expect(_body).to.have.property('closedPercent')
                }
            }
        )
    })
    it('/issues: invalid request', async () => {
        await request.get( {
            url : urlBase+'/issues'
        }, (error, response, body) => {
                let _body = {}
                try{
                  _body = JSON.parse(body)
                }
                catch(e){
                  _body = {}
                }
                if(response.statusCode != undefined)
                    expect(response.statusCode).to.equal(400)
            }
        )
    })
    
    it('/pullrequests: valid request', async () => {
        await request.get( {
            url : urlBase+'/pullrequests'+urlParams
        }, (error, response, body) => {
                let _body = {}
                try{
                  _body = JSON.parse(body)
                }
                catch(e){
                  _body = {}
                }
                if(response.status != undefined)
                    expect(response.status).to.equal(200)
            }
        )
    })
    it('/pullrequests: invalid request', async () => {
        await request.get( {
            url : urlBase+'/pullrequests'
        }, (error, response, body) => {
                let _body = {}
                try{
                  _body = JSON.parse(body)
                }
                catch(e){
                  _body = {}
                }
                if(response.statusCode != undefined)
                    expect(response.statusCode).to.equal(400)
            }
        )
    })
    
    it('/branches: valid request', async () => {
        await request.get( {
            url : urlBase+'/branches'+urlParams
        }, (error, response, body) => {
                let _body = {}
                try{
                  _body = JSON.parse(body)
                }
                catch(e){
                  _body = {}
                }
                if(response.status != undefined)
                    expect(response.status).to.equal(200)
            }
        )
    })
    it('/branches: invalid request', async () => {
        await request.get( {
            url : urlBase+'/branches'
        }, (error, response, body) => {
                let _body = {}
                try{
                  _body = JSON.parse(body)
                }
                catch(e){
                  _body = {}
                }
                if(response.statusCode != undefined)
                    expect(response.statusCode).to.equal(400)
            }
        )
    })
})