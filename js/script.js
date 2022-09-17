'use strict';
( function () {
    const table = document.createElement('table');
let num = 1;
    for (let i = 0; i < 10; i++) {
        const tr = document.createElement('tr');
        for (let i = 0; i < 10; i++) {
            const td = document.createElement('td');
            td.innerText = num;
            tr.append(td);
            num++;
        }
        table.append(tr);
    }
    document.body.append(table)
})();