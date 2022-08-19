export class ItemPedido {
    constructor(
        public nome: string,
        public preco: number,
        public quantidade: number,
    ) {}
    
    get descricao() {
        return `${this.nome} R$ ${this.preco} Qtd.: ${this.quantidade} `;
    };
}