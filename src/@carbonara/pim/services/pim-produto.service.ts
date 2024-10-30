import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpResponse } from '../../common/@types/http/http-response.interface';
import { PagedResponse } from '../../common/@types/http/paged-response.interface';
import { PimProduto } from '../@types/models/pim-produto';
import { PimProdutoQueryParams } from '../@types/requests/pim-produto-query-params';
import { PimProdutoSearchParams } from '../@types/requests/pim-produto-search-params';

@Injectable()
export class PimProdutoService {
  private readonly uri = 'produtos/';
  private readonly http = inject(HttpClient);

  search(
    pesquisarProdutoInput: PimProdutoSearchParams
  ): Observable<HttpResponse<PagedResponse<PimProduto>>> {
    return this.http.get<HttpResponse<PagedResponse<PimProduto>>>(this.uri);
  }

  getById(
    produtoId: number,
    queryParams?: PimProdutoQueryParams
  ): Observable<HttpResponse<PimProduto>> {
    return this.http.get<HttpResponse<PimProduto>>(this.uri + produtoId);
  }

  getByCodigo(
    codigo: string,
    queryParams?: PimProdutoQueryParams
  ): Observable<HttpResponse<PimProduto>> {
    return this.http.get<HttpResponse<PimProduto>>(
      this.uri + `codigo:${codigo}`
    );
  }

  getByGtin(
    gtin: string,
    queryParams?: PimProdutoQueryParams
  ): Observable<HttpResponse<PimProduto>> {
    return this.http.get<HttpResponse<PimProduto>>(this.uri + `gtin:${gtin}`);
  }
}
