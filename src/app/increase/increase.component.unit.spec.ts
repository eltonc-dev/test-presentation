import { IncreaseComponent } from './increase.component';

describe('IncreaseComponent - Unit', () => {
    let component;

    beforeEach(() => {
        component  = new IncreaseComponent();
    });

    it('Should start with 0', () => {
        expect(component.value).toEqual(0);
    });

    it('Should increase 1 when increase called', () => {
       component.increase();
       
       expect(component.value).toEqual(1);
    });
});