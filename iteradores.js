const nomes = ["Ana", "Bruno", "Carla"];
const iterador = nomes[Symbol.iterator]();

while (true) {
  const atual = iterador.next();
  if (atual.done) break;
  console.log(atual.value);
}
