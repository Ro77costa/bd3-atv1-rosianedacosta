const database = "BD3-NoSQL-AtlasMongoDB";

const collection = "bd3-nosql-atv1";

use(database);

db.createCollection(collection);

db["bd3-nosql-atv1"].find({"cod_turma": 7,},{"_id": 0, "cod_aluno": 0});
