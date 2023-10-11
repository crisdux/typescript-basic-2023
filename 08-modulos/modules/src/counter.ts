// export function setupCounter(element: HTMLButtonElement) {
//   let counter = 0
//   const setCounter = (count: number) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }


export class Persona {
  constructor(public nombre:string, public edad:number){

  }

  get getNombre(){
    return this.nombre;
  }

  set setNombre(nombre:string){
    this.nombre = nombre;
  }
}