const article = {
    libelle: "pc",
    prix: 750,
    dcription(){
        return `${this.libelle} pour un prix de ${this.prix}`
    }

}


console.log(article.dcription());
