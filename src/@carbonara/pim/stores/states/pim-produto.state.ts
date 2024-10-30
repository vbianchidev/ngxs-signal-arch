import { inject, Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { tap } from 'rxjs';

import { PagedResponse } from '../../../common/@types/http/paged-response.interface';
import { PimProduto } from '../../@types/models/pim-produto';
import { PimProdutoService } from '../../services/pim-produto.service';
import { PimProdutoActions } from '../actions/pim-produto.action';

interface PimProdutoStateModel {
  produtosPaged: PagedResponse<PimProduto> | null;
  produtoSelected: PimProduto | null;
}

@State<PimProdutoStateModel>({
  name: new StateToken<PimProdutoStateModel>('PimProduto'),
  defaults: {
    produtosPaged: null,
    produtoSelected: null,
  },
})
@Injectable()
export class PimProdutoState {
  private readonly pimProdutoService = inject(PimProdutoService);

  @Selector()
  static getProdutos({ produtosPaged }: PimProdutoStateModel) {
    return produtosPaged;
  }

  @Action(PimProdutoActions.Search)
  search(
    ctx: StateContext<PimProdutoStateModel>,
    { searchParams }: PimProdutoActions.Search
  ) {
    return this.pimProdutoService
      .search(searchParams)
      .pipe(
        tap((response) => ctx.patchState({ produtosPaged: response.content }))
      );
  }

  @Action(PimProdutoActions.GetById)
  getById(
    ctx: StateContext<PimProdutoStateModel>,
    { produtoId, queryParams }: PimProdutoActions.GetById
  ) {
    return this.pimProdutoService
      .getById(produtoId, queryParams)
      .pipe(
        tap((response) => ctx.patchState({ produtoSelected: response.content }))
      );
  }

  @Action(PimProdutoActions.GetByCodigo)
  getByCodigo(
    ctx: StateContext<PimProdutoStateModel>,
    { codigo, queryParams }: PimProdutoActions.GetByCodigo
  ) {
    return this.pimProdutoService
      .getById(codigo, queryParams)
      .pipe(
        tap((response) => ctx.patchState({ produtoSelected: response.content }))
      );
  }

  @Action(PimProdutoActions.GetByGtin)
  getByGtin(
    ctx: StateContext<PimProdutoStateModel>,
    { gtin, queryParams }: PimProdutoActions.GetByGtin
  ) {
    return this.pimProdutoService
      .getById(gtin, queryParams)
      .pipe(
        tap((response) => ctx.patchState({ produtoSelected: response.content }))
      );
  }
}
