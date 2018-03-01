import { FirstTimeRun } from './FirstTimeRun'
describe('probar clase contador', () => {

    it('Setea contador', () =>{
        expect(FirstTimeRun.contar()).toBe(0);
    });

    it('Setea sumar', () =>{
        FirstTimeRun.addTime();
        expect(FirstTimeRun.contar()).toBe(1);
    });
    afterEach(() => {
        FirstTimeRun.resetContador();
    });
});