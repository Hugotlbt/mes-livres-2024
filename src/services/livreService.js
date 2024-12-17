// Service qui va faire du CRUD avec les livres

export const insererLivre = (titre, auteur, resume, estLu) => {
    // 1. Cree un objet js a partit des données saisies dans le formulaire
    const livre = {
        titre : titre,
        auteur : auteur,
        resume : resume,
        estLu : estLu,
        id : crypto.randomUUID(), // ID unique
        createdAt : new Date().toDateString()
    }


    // 2. Serialiser (transformer) en JSON (chaine de caractéres)
    const livreJSon = JSON.stringify(livre)

    // 3. Sauvegarder dans le localStorage
    // 3.1 Recuperer dans le localStorage la valeur liée a la clé "livres"
    const livresJson = localStorage.getItem("livres")

    // 3.2 Désérialiser le JSON dans un tableau javaScript
    const livres = livresJson ? JSON.parse(livresJson) : []
    console.log(livres)

    // 3.3 Ajouter l'objet livre dans le tableau
    livres.push(livre)
    // 3.4 Sauvegarder le tableau livres dans le localStorage sous la clé "livres"
    localStorage.setItem("livres",JSON.stringify(livres))

}

export const rechercherToutLesLivres = () => {
    // 3.1 Recuperer dans le localStorage la valeur liée a la clé "livres"
    const livresJson = localStorage.getItem("livres")

    // 3.2 Désérialiser le JSON dans un tableau javaScript
    const livres = livresJson ? JSON.parse(livresJson) : []
    console.log(livres)

    return livres
}

export const supprimerLivre = id => {
    // Recuperer tout les livres depuis le localStorage
    const livresJson = localStorage.getItem("livres")
    // Derealiser le JSON du tableau JS
    const livres = livresJson ? JSON.parse(livresJson) : []

    // Supprimer le livre avec l'id 'id' dans le tableau livre
    const livresRestants = livres.filter(livres => livres.id !== id)

    // Sauvegarder dans le localStorage
    localStorage.setItem("livres",JSON.stringify(livresRestants))
}

export const gererEstLu = id => {
    const livresJson = localStorage.getItem("livres")
    // Derealiser le JSON du tableau JS
    const livres = livresJson ? JSON.parse(livresJson) : []
    // Mettre true ou false dans le tableau livre
    const livresLus = livres.filter(livres => livres.id !== id)
    // Sauvegarder dans le localStorage
    localStorage.setItem("livres",JSON.stringify(livresLus))

}