class Quiz {
        constructor(){
            this.title = creatElement ("h2");
            this.quiz = createElement ("h4");
    this.buttonanswer = creatButton("enviar");
   this.responce = createinput("").attribute("placeholder","sua resposta aqui")
this.ButtonResponse = createButton("enviar");
        }
        setPos(){
            this.title.position(width/2,height/2);
            this.quiz.positiom(width/2,height/2+50);
            this.response.positiom(width/2,height/2+100);
            this.ButtonResponse.positiom(width/2,height/2+150);
        }
            problemas(){
        numero1 = Math.floor(randow()*10)
        numero2 = Math.floor(randow()*10)
        resp = numero1 + numero2;
        perg = "quanto é "+numero1+"+"+numero2+"?"
            }
}