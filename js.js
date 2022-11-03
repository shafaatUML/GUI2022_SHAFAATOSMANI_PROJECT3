function createtable() {

    if (!document.querySelector("table")) {

    const table = document.createElement('table'); 
    let minX, minY, maxX, maxY; 
    minX = document.getElementById("minX").value;
    maxX = document.getElementById("maxX").value;
    minY = document.getElementById("minY").value;
    maxY = document.getElementById("maxY").value;

    // test for invalid inputs //
    if (minX > 50 || minX < -50) {
       throw 'minX is out of range';
    }
    if (maxX > 50 || maxX < -50) {
        throw 'maxX is out of range'; 
    }
    if (minY > 50 || minY < -50) {
        throw 'minY is out of range'; 
    }
    if (maxY > 50 || maxY < -50) {
        throw 'maxY is out of range'; 
    }

    const colarr = []; 
    const rowarr = []; 
    if (minY >= 0){
        colarr.push(0); 
    }
    if (minX >= 0){
        rowarr.push(0); 
    }
    for (let i = 1; i <= maxY; i++) {
        colarr.push(i); 
    }
    for (let i = 1; i <= maxX; i++) {
        rowarr.push(i); 
    }

    for (let i = 0; i < Number(rowarr.length); i++) {
        const rowX = document.createElement('tr');
        for (let j = 0; j < Number(colarr.length); j++) {
            const columnY = document.createElement('td');  

            let val = rowarr[i] * colarr[j]; 

            if (i === 0 || j === 0) {
                val = rowarr[i] || colarr[j]; 
                columnY.classList.add('header'); 
            }

            if (i === 0 && j === 0) {
                val = 'x';
            }

            columnY.innerHTML = val;

            rowX.appendChild(columnY); 
        }
        table.appendChild(rowX);
    }
    const maintbl = document.getElementById("multtable");
    maintbl.appendChild(table);
    event.preventDefault();

}

else {
    document.querySelector("table").remove(); 
    createtable(); 
}

}

