// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (name){
    cats.push (name);
}
function destructivelyPrependCat (name){
    cats.unshift (name);
}
destructivelyRemoveLastCat = () =>{cats.pop()};
destructivelyRemoveFirstCat = () =>{cats.shift()};
appendCat = (name) =>{return [...cats, name]};
prependCat =(name) =>{return [name, ...cats]};
removeLastCat =() =>{return cats.slice(0,-1)};
removeFirstCat =() =>{return cats.slice(1)};