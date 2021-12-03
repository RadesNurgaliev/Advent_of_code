const commands = document.getElementsByTagName('pre')[0].innerText.split('\n').filter(e => e !== '').map(e => { let p = e.split(' '); return { name: p[0], value: Number(p[1]) }; });

let depth = 0;
let distance = 0;
let target = 0;
commands.forEach(command => {
   switch (command.name) {
       case "forward": 
           distance += command.value;
           depth += command.value * target;
           break;
       case "down": 
           target += command.value;
           break;
       case "up": 
           target -= command.value;
           break;
    }
});

console.log("Результат: " + (depth * distance));