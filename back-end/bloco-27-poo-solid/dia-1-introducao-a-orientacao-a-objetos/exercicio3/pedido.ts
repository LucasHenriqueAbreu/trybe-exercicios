import { FormaPagamento } from './forma-pagamento';
import { ItemPedido } from './item-pedido';
import { PessoaCliente } from './pessoa-cliente';

class Pedido {
    constructor(
        public cliente: PessoaCliente,
        public itensPedido: ItemPedido[],
        public formaPagamento: FormaPagamento,
        public desconto?: number,
    ) { }

    public valor(): number {
        const valorTotal = this._valorTotalItens();
        return valorTotal - this._obtemValorDesconto(valorTotal);
    }

    private _valorTotalItens(): number {
        return this.itensPedido.reduce((previousValue: number, currentValue: ItemPedido) => currentValue.preco * currentValue.quantidade + previousValue, 0)
    }

    private _obtemValorDesconto(valorTotal: number): number {
        console.log(this.desconto);
        return this.desconto !== null || this.desconto !== undefined ? valorTotal * (this.desconto! * 10) / 100 : 0;
    }

    get descricao(): string {
        return `
            O Cliente ${this.cliente.nome} comprou: \n ${this.itensPedido.map((item: ItemPedido) => `${item.descricao}`)} \n
            Com desconto de R$ ${this._obtemValorDesconto(this._valorTotalItens())}, sendo o valor total da compra R$ ${this.valor()}
        `;
    }
}

// Preço total da compra é igual R$ 63,00
const pedido = new Pedido(
    new PessoaCliente('Lucas'),
    [
        new ItemPedido('café', 12.0, 2),
        new ItemPedido('leite', 3.0, 10),
        new ItemPedido('pão', 2.0, 2),
        new ItemPedido('ovos', 5.0, 1),
    ],
    FormaPagamento.CARTAO,
    0.1
);
console.log(pedido.descricao);