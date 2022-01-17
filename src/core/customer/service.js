const req = require('express/lib/request')
const res = require('express/lib/response')
const customer = require('../../../models/customer')
const repository = require('./reporitory')
module.exports = {
    create,
    findAll,
    update,
    destroy
    
}

async function create(name, email) {
   const emailExists = await repository.findByEmail(email)
    if (emailExists) {
        return {
            error: 'E-mail já existe'
        }
    }
    const customer = await repository.create(name, email)
    return customer
}

async function findAll() {
    const customers = await repository.findAll()
    return customers
}

async function update(name, email, id) {
    const customerExists = await repository.findById(id)
    if (!customerExists){
        return {
            error: 'Usuario não encontrado'
        }
    }
    const update = await customerExists.set({
        name: name,
        email: email
    })
    const updatedCustomer = await update.save()
    return updatedCustomer
}

async function destroy(id){
    const customerExists = await repository.findById(id)
    if (!customerExists){
        return {
            error: 'Usuario não encontrado'
        }
    }
    await customerExists.destroy()
    return "Usuario deletado"
}