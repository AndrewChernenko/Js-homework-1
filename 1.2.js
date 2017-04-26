function polin(insert) {

    let revert = insert.split('').reverse().join('');
    let bulka;
    if (revert == insert) {
        bulka = true;
    } else {
        bulka = false;
    }
    return bulka;
}
console.log(polin('some'));
