function Veiculo(marca, modelo, ano) {
    if (new.target === Veiculo) {
        throw new Error('Erro ao instanciar! Por favor, verifique o código.');
    }

    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;

    this.exibirDetalhes = function () {
        throw new Error('Nenhuma subclasse identificada! Por favor, verifique o código.');
    };
}

function Carro(marca, modelo, ano, numPortas) {
    Veiculo.call(this, marca, modelo, ano);

    this.numPortas = numPortas;

    this.exibirDetalhes = function () {
        return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Portas: ${this.numPortas}`;
    };
}

function Moto(marca, modelo, ano, cilindradas) {
    Veiculo.call(this, marca, modelo, ano);

    this.cilindradas = cilindradas;

    this.exibirDetalhes = function () {
        return `Moto: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Cilindradas: ${this.cilindradas}`;
    };
}

const carro1 = new Carro("Toyota", "Corolla", 2020, 4);
const carro2 = new Carro("Honda", "Civic", 2018, 4);
const moto1 = new Moto("Yamaha", "MT-07", 2021, 689);

console.log(carro1.exibirDetalhes());
console.log(carro2.exibirDetalhes());
console.log(moto1.exibirDetalhes());