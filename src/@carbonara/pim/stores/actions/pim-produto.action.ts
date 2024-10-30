import { PimProdutoQueryParams } from '../../@types/requests/pim-produto-query-params';
import { PimProdutoSearchParams } from '../../@types/requests/pim-produto-search-params';

const ACTION_PRODUCT = 'PIM';
const ACTION_FEATURE = 'PRODUTO';

export namespace PimProdutoActions {
  export class Search {
    static readonly type = `[${ACTION_PRODUCT}-${ACTION_FEATURE}] Search`;
    constructor(public readonly searchParams: PimProdutoSearchParams) {}
  }

  export class GetById {
    static readonly type = `[${ACTION_PRODUCT}-${ACTION_FEATURE}] Get By Id`;
    constructor(
      public readonly produtoId: number,
      public readonly queryParams?: PimProdutoQueryParams
    ) {}
  }

  export class GetByCodigo {
    static readonly type = `[${ACTION_PRODUCT}-${ACTION_FEATURE}] Get By Codigo`;
    constructor(
      public readonly codigo: number,
      public readonly queryParams?: PimProdutoQueryParams
    ) {}
  }

  export class GetByGtin {
    static readonly type = `[${ACTION_PRODUCT}-${ACTION_FEATURE}] Get By GTIN`;
    constructor(
      public readonly gtin: number,
      public readonly queryParams?: PimProdutoQueryParams
    ) {}
  }
}
