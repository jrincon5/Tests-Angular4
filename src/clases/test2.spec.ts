import { FirstTimeRun } from './FirstTimeRun'
describe('probar clase contador 2', () => {

    beforeEach(() => {
        FirstTimeRun.resetContador();
    });

    it('Setea contador 2', () =>{
        expect(FirstTimeRun.contar()).toBe(0);
    });

    it('Setea sumar 2', () =>{
        FirstTimeRun.addTime();
        expect(FirstTimeRun.contar()).toBe(1);
    });
});