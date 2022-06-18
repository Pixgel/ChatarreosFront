import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comprador } from 'src/app/comprador/shared/comprador';
import { Vendedor } from 'src/app/vendedor/shared/model.clases';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiBase: string=environment.apiBase
  constructor(private http:HttpClient) { }

  public loginComprador(comprador: Comprador):Observable<any>{
    return this.http.post(`${this.apiBase}comprador/login`,comprador)
  }
  
  public loginVendedor(vendedor: Vendedor):Observable<any>{
    return this.http.post(`${this.apiBase}vendedor/login`,vendedor)
  }
  //{{url_base}}vendedor/1
  public BuscarIdVendedor(id:Number){
    return this.http.get<any>(`${this.apiBase}vendedor/${id}`)
  }
}
