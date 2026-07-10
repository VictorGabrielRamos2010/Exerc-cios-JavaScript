function criarPersonagem(nome, classe, nivel) {
    return {
      nome: nome,
      classe: classe,
      nivel: nivel,
      hp: nivel * 10,
  
      apresentar() {
        console.log(`${this.nome} é um(a) ${this.classe} nível ${this.nivel} com ${this.hp} HP`);
      }
    };
  }
  
  const personagem1 = criarPersonagem("XubireiBirei", "Aventureiro", 59);
  const personagem2 = criarPersonagem("GranolaKifk", "Aventureiro", 60);
  
  personagem1.apresentar();
  personagem2.apresentar();