const op = {
    '+': arr => +arr[0] + +arr[1],
    '-': arr => arr[0] - arr[1],
    '*': arr => arr[0] * arr[1],
    '/': arr => arr[0] / arr[1],
    '%': arr => arr[0] % arr[1],
    '^': arr => arr[0] ** arr[1],
};
const ru = 'ru-ru';
//str = 'https://learn.microsoft.com/en-US/dotnet/csharp/fundamentals/types/classes';
let str = '14*13/2+2*3';
let flag;
//console.log(str.replace(new RegExp('(en-us)', 'gi'), match => match.split('').map((m, i) => m === m.toLowerCase() ? ru[i] : ru[i].toUpperCase()).join('')));

do {
    flag = false;
    str = str.replace(/\(.+\)/gi, match => {
        flag = true;
        return replace(match).slice(1, -1);
    });
} while (flag);
for (const signs of ['*/', '+-'])
    do {
        flag = false;
        str = str.replace(new RegExp(`[0-9]+[${signs}][0-9]+`), match => {
            flag = true;
            const sign = match.match(/\D/);
            return op[sign](match.split(sign));
        });
    } while (flag);
console.log(str);
/*let cont = true;
while (cont) {
    cont = false;

}
console.log(str);*/

function replace(str) {
    return str.replace(/[0-9]+[*/][0-9]+/i, match => {
    const [f, s] = match.split('*');
    return f * s;
});
}