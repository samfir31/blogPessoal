import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-put-postagem',
  templateUrl: './put-postagem.component.html',
  styleUrls: ['./put-postagem.component.css']
})
export class PutPostagemComponent implements OnInit {
  postagem: Postagem = new Postagem()

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  idPost: number

  constructor(
    private temaService: TemaService,
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.idPost = this.route.snapshot.params["id"]
    this.findByIdPostagem(this.idPost)

    this.findAllTemas();
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=>{
      this.postagem = resp
    })
  }

  salvar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      this.router.navigate(['/feed'])
      alert('Postagem alterada com sucesso')
    })
  }
  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
      this.listaTemas = resp;
    }, err =>{
      if(err.status == '500'){
        alert('Preencha todos os campos corretamente antes de enviar!')
      }
    })
  }
  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) =>{
      this.tema = resp;
    });
  }

}
