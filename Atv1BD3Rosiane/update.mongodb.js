const database = "BD3-NoSQL-AtlasMongoDB";

const collection = "bd3-nosql-atv1";

use(database);

db.createCollection(collection);

db["bd3-nosql-atv1"].update(
    {codigo: "1"},
    {$set:{cpf: "000000000-1",
        nome: "João da Silva",
        rg: "0000000-1"}})