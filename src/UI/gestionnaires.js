// Gestionnaire d'évenements

import {gererEstLu, insererLivre, supprimerLivre} from "../services/livreService.js";
import {afficherLivres} from "./render.js";

export const setupGestionnaires =() => {
    // Recuperer les elements dans le DOM
    const toggleFormBtn = document.querySelector("#toggleFormBtn")
    const formSection = document.querySelector('#formSection')
    const formCollapse = new bootstrap.Collapse(formSection, {toggle:false})
    const livreForm = document.querySelector("#bookForm")



        // Gestionnaire click button toggleFormBtn
    toggleFormBtn.addEventListener("click",() => {
        formCollapse.toggle()
    })
        // Reset le formulaire lorsque celui ci est caché
    formSection.addEventListener('hidden.bs.collapse', () => {
            livreForm.reset()
    })

        // Traitement du formulaire
    livreForm.addEventListener("submit", (evt) => {
        // Empecher le rechargement de la page
        evt.preventDefault()
        // Recuperer les valeurs saisies
        const titre = livreForm.title.value
        const auteur = livreForm.author.value
        const resume = livreForm.summary.value
        const estLu = livreForm.isRead.checked

        //****************************************************************
        // Sauvegarder les données saisies
        //****************************************************************

        insererLivre(titre,auteur,resume,estLu)
        // 4. Cacher le formulaire (collapse)
        formCollapse.hide()
        // Afficher la liste des livres
        afficherLivres()
    })

    // Traitement de la suppresion d'un livre
    // Delegation d'événements
    const listeLivre = document.querySelector('#booksList')
    listeLivre.addEventListener('click',(evt) => {
        // Recuperer l'élément sur lequel on a cliqué
        const target = evt.target.closest(".delete-btn, .toggle-read-btn")
        if (target === null) return;
        // Recuperer l'id du livre a supprimer a partir du data set
        const idLivre = target.dataset.id
        // Determiner sur quel element on a cliqué
        if (target.classList.contains("delete-btn")){
            supprimerLivre(idLivre)
            afficherLivres() // Remet a jour l'affichage
        } else if (target.classList.contains("toggle-read-btn")){
            console.log("toggle click")
            gererEstLu()
            afficherLivres()
        }
    })
}