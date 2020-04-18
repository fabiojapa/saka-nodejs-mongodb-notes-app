//importa os módulos e aqruivos necessários
const request = require('supertest');
const server = require('../server');
const sayTDD = require('../helloJest');

//o que será executado antes de todos os testes
beforeAll(async () => {
    console.log('Iniciando TDD com jest!');
});

//o que será executado após todos os testes
afterAll(() => {
    //o server close irá encerrar nossa aplicação, evitando problemas da porta já estar em uso
    server.close();
    console.log('servidor fechado');
});


describe('inicio dos testes', () => {
    //descrição do caso de testes
    test('acessa a rota da home e verifica o conteúdo que é exibido ', async () => {
        //qual a rota que ele deve acessar e qual requisição deve fazer
        const response = await request(server).get('/');
        //qual o status esperado 
        expect(response.status).toEqual(200);
        //se todos esses passos passarem, verifica o conteúdo exibido dentro desta rota
        expect(response.text).toContain('{\"message\":\"Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.\"}');

    });

    test('acessa a rota /notes e então será apresentada a seguinte defiição de tdd:', async () => {
        const response = await request(server).get('/api/v1/notes');
        expect(response.status).toEqual(200);
        expect(response.text).toContain('\"title\":');
    });

    //aqui não iremos testar uma rota e sim o retorno de uma função.
    test('irá verificar o retorno da função saytdd', () => {
        //é esperado que o retorno da função saytdd seja:
        expect(sayTDD()).toMatch('TDD é o Desenvolvimento Orientado por Testes');
    });
})