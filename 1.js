function arr()
{

    for (let i = 0; i < arguments.length - 1; i++) {
        arguments[arguments.length - 1](arguments[i]);
    }
}

arr('asdasdas', 'hfghfg', 'eqweqwe', 'faffas', (item) =>

{

    console.log(item.toUpperCase());

});