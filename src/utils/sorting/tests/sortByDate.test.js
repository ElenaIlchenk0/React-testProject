import { sortByDate } from '../sortByDate';

const fixtures =  [{date: 1373140800}, {date: 1378497600}, {date: 1425157200}];

describe('sortByDate', ()=> {
    it('should return descending sort arr', () => {
        const result = sortByDate(fixtures);
        
        expect(result).toEqual([ { date: 1425157200 }, { date: 1378497600 }, { date: 1373140800 } ]);
    });
});
