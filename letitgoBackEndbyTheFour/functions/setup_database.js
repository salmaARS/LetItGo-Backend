const db = require('./api/database')

async function setupDatabase(req, res, next) {
    // To delete all the collections
    const collections = ['users', 'products']
    collections.forEach(async (collection) => await deleteCollection(collection))

    // Add documents to the todos collection
    addDocuments(
        'users',
        [
            { username: 'faaiqFajari', pass: '12345', name: 'Faaiq Fajari', email: 'fauzaaan@gmail.com', telephone: '+6012324', faculty: 'Engineering' },
            { username: 'angeliah', pass: '12345', name: 'Angelia Hasan', email: 'angel@gmail.com', telephone: '+6012324', faculty: 'Engineering' },
            { username: 'miftachchairuna', pass: '12345', name: 'Miftach', email: 'una@gmail.com', telephone: '+6012324', faculty: 'Engineering' }
        ]
    )

    addDocuments(
        'products',
        [
            { prodName : 'FILA RED', brand: 'FILA', prodPrice: '300', prodDesc: 'This is FILA Bag', prodCond: 'NEW', completed: true, status: 'sold' },
            { prodName : 'GUCCI GANG', brand: 'GUCCI', prodPrice: '700', prodDesc: 'This is GUCCI bag', prodCond: 'NEW',  completed: true, status: 'booked' },
            { prodName : 'Supreme Famous', brand: 'SUPREME', prodPrice: '100', prodDesc: 'SUPREME GOOD', prodCond: 'USED',   completed: false, status: 'sold' }
        ]
    )
     
    
    
     
    res.send('Setting Up Database.... Done ')
}

async function deleteCollection(collection) {
    const cref = db.firestore.collection(collection)
    const docs = await cref.listDocuments()
    docs.forEach((doc) => doc.delete())
}

function addDocuments(collection, docs) {
    docs.forEach((doc) => db.create(collection, doc))
}

module.exports = setupDatabase