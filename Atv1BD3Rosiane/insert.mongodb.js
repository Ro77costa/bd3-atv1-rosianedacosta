const database = "BD3-NoSQL-AtlasMongoBD";

const collection = "bd3-nosql-atv1";

use(database);

db["bd3-nsql-atv1"].insertMany(
    [
        {
            "cod_aluno": 1,
            "cod_turma": 7,
            "nome": "João da Silva" ,
            "cpf": "111111111-11",
            "rg": "11111111-1",
            "telefone_aluno": "(11) 91234-5678",
            "telefone_responsavel": "(11) 99876-5432",
            "email": "joao.silva@email.com",
            "data_nascimento": "2005-03-12",
        },

        {
            "cod_aluno": 2,
            "cod_turma": 7,
            "nome": "Maria Oliveira" ,
            "cpf": "222.222.222-22",
            "rg": "22.222.222-2",
            "curso": "Desenvolvimento de Sistemas",
            "telefone_aluno": "(21) 92345-6789",
            "telefone_responsavel": "(21) 98765-4321",
            "email": "maria.oliveira@email.com",
            "data_nascimento": "2006-07-25",

        },

        {
            "cod_aluno": 3,
            "cod_turma": 7,
            "nome": "Pedro Santos",
            "cpf": "333.333.333-33",
            "rg": "33.333.333-3",
            "curso": "Desenvolvimento de Sistemas",
            "telefone_aluno": "(31) 93456-7890",
            "telefone_responsavel": "(31) 97654-3210",
            "email": "pedro.santos@email.com",
            "data_nascimento": "2005-11-05",

        },

        {
            "cod_aluno": 4,
            "cod_turma": 7,
            "nome": "Ana Costa",
            "cpf": "444.444.444-44",
            "rg": "44.444.444-4",
            "curso": "Desenvolvimento de Sistemas",
            "telefone_aluno": "(41) 94567-8901",
            "telefone_responsavel": "(41) 96543-2109",
            "email": "ana.costa@email.com",
            "data_nascimento": "2007-01-18",

        },

        {
            "cod_aluno": 5,
            "cod_turma": 7,
            "nome": "Lucas Pereira",
            "cpf": "555.555.555-55",
            "rg": "55.555.555-5",
            "curso": "Desenvolvimento de Sistemas",
            "telefone_aluno": "(51) 95678-9012",
            "telefone_responsavel": "(51) 95432-1098",
            "email": "lucas.pereira@email.com",
            "data_nascimento": "2006-05-30",

        },

        {
            "cod_aluno": 6,
            "cod_turma": 7,
            "nome": "Carla Mendes",
            "cpf": "666.666.666-66",
            "rg": "66.666.666-6",
            "curso": "Desenvolvimento de Sistemas",
            "telefone_aluno": "(61) 96789-0123",
            "telefone_responsavel": "(61) 94321-0987",
            "email": "carla.mendes@email.com",
            "data_nascimento": "2005-09-14"

        },

        {
            "cod_aluno": 7,
            "cod_turma": 7,
            "nome": "Rafael Lima",
            "cpf": "777.777.777-77",
            "rg": "77.777.777-7",
            "curso": "Desenvolvimento de Sistemas",
            "telefone_aluno": "(71) 97890-1234",
            "telefone_responsavel": "(71) 93210-9876",
            "email": "rafael.lima@email.com",
            "data_nascimento": "2006-12-02",
        },

        {
            "cod_aluno": 8,
            "cod_turma": 7,
            "nome": "Fernanda Rocha",
            "cpf": "888.888.888-88",
            "rg": "88.888.888-8",
            "curso": "Desenvolvimento de Sistemas",
            "telefone_aluno": "(81) 98901-2345",
            "telefone_responsavel": "(81) 92109-8765",
            "email": "fernanda.rocha@email.com",
            "data_nascimento": "2005-06-21",

        },

        {
            "cod_aluno": 9,
            "cod_turma": 7,
            "nome": "Bruno Carvalho",
            "cpf": "999.999.999-99",
            "rg": "99.999.999-9",
            "curso": "Desenvolvimento de Sistemas",
            "telefone_aluno": "(91) 99012-3456",
            "telefone_responsavel": "(91) 91098-7654",
            "email": "bruno.carvalho@email.com",
            "data_nascimento": "2007-03-11",
        },

        {
            "cod_aluno": 10,
            "cod_turma": 7,
            "nome": "Patrícia Gomes",
            "cpf": "000.000.000-00",
            "rg": "00.000.000-0",
            "curso": "Desenvolvimento de Sistemas",
            "telefone_aluno": "(11) 90123-4567",
            "telefone_responsavel": "(11) 90987-6543",
            "email": "patricia.gomes@email.com",
            "data_nascimento": "2006-08-19",

        }
    ]
)