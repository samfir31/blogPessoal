import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];

  tema: Tema = new Tema();
  listaTemas: Tema[];


  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService 
  ) { }

  ngOnInit(): void {
    this.findAllPostagens();
    this.findAllTemas();
  }

  findAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) =>{
      this.listaPostagens = resp;
    })
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
      this.listaTemas = resp;
    })
  }
}
