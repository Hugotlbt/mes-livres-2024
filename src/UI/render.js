//  Rendu des livres

import { rechercherToutLesLivres} from "../services/livreService.js";

export const afficherLivres = () => {
    // Recuperer la div avec l'id "booksList"
    const listLivre = document.querySelector('#booksList')

    // Récupérer la liste des livres dans le localStorage (sous la forme d'un tableau)
    const livres = rechercherToutLesLivres()

    // Afficher chaque livre sous la forme d'une card
    listLivre.innerHTML = livres.map(livre => {
        // Formater la date
        const date = new Date(livre.createdAt).toLocaleDateString("fr")
        return `<div class="col-md-6 col-lg-4" id="book-${livre.id}">
     <div class="card h-100">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
                <h5 class="card-title mb-0">${livre.titre}</h5>
                <span class="badge ${livre.estLu ? 'bg-success' : 'bg-secondary'} toggle-read-btn" 
                        style="cursor: pointer" data-id=${livre.id}>
                    ${livre.estLu ? '<i class="bi bi-check-circle me-1"></i>Lu' : '<i class="bi bi-circle me-1"></i>Non lu'} 
                </span>
                </div>
                <h6 class="card-subtitle mb-2">
                <i class="bi bi-person me-1"></i>${livre.auteur}
                </h6>
                <p class="card-text small">${livre.resume}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <small class="text-muted">
                    <i class="bi bi-calendar3 me-1"></i>${date}
                </small>
                <button class="btn btn-outline-danger btn-sm delete-btn" data-id="${livre.id}" >
                    <i class="bi bi-trash me-1"></i>Supprimer
                </button>
            </div>
        </div>
    </div>
</div>
`
    }).join('')

}