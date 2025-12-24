# Exercices de rappel - TypeScript (Chapitres 1-5)

Exercices progressifs pour réviser les concepts vus dans la formation Dyma.

---

## Exercice 1 : Types de base et unions

### Objectif
Créer une fonction qui formate des prix avec gestion des valeurs nulles.

### Consignes
Crée une fonction `formaterPrix` qui :
- Accepte un prix (`number | null`) et une devise optionnelle (`string`, par défaut `"EUR"`)
- Retourne une chaîne formatée comme `"50.00 EUR"`
- Gère le cas où le prix est `null` (retourne alors `"Prix non disponible"`)

### Exemple d'utilisation
```typescript
formaterPrix(50) // "50.00 EUR"
formaterPrix(25.5, "USD") // "25.50 USD"
formaterPrix(null) // "Prix non disponible"
```

---

## Exercice 2 : Fonctions et types avancés

### Objectif
Manipuler des tableaux avec des fonctions de callback typées.

### Consignes
Crée une fonction `filtrerProduits` qui :
- Prend un tableau de produits (objets avec `nom: string`, `prix: number`, `enStock: boolean`)
- Prend une fonction de filtrage en paramètre
- Retourne un nouveau tableau filtré
- Bonus : utilise les types génériques si tu t'en souviens !

### Exemple d'utilisation
```typescript
const produits = [
  { nom: "Clavier", prix: 50, enStock: true },
  { nom: "Souris", prix: 25, enStock: false },
  { nom: "Écran", prix: 200, enStock: true }
];

filtrerProduits(produits, p => p.enStock);
// Retourne les produits en stock
```

---

## Exercice 3 : Classes et héritage

### Objectif
Créer une hiérarchie de classes avec l'héritage.

### Consignes
Crée une hiérarchie de classes :
- Classe de base `Vehicule` avec des propriétés `marque` et `modele`, et une méthode `decrire()`
- Classe `Voiture` qui étend `Vehicule` et ajoute `nombrePortes`
- Classe `Moto` qui étend `Vehicule` et ajoute `cylindree`
- Utilise les modificateurs d'accès appropriés (`public`, `private`, `protected`)

### Exemple d'utilisation
```typescript
const voiture = new Voiture("Renault", "Clio", 5);
voiture.decrire(); // "Renault Clio - 5 portes"

const moto = new Moto("Yamaha", "MT-07", 689);
moto.decrire(); // "Yamaha MT-07 - 689cc"
```

---

## Exercice 4 : Interfaces

### Objectif
Définir des interfaces pour structurer des données complexes.

### Consignes
Crée des interfaces pour un système de blog :
- Interface `Auteur` avec `nom`, `email`, et `bio` (optionnelle)
- Interface `Article` avec `titre`, `contenu`, `auteur` (de type `Auteur`), `datePublication`, et `tags` (tableau de strings)
- Interface `Commentaire` qui étend une interface `Horodatage` (avec `creeLe` et `modifieLe`)

### Exemple de structure
```typescript
const auteur: Auteur = {
  nom: "Marie Dupont",
  email: "marie@example.com",
  bio: "Développeuse passionnée"
};

const article: Article = {
  titre: "Introduction à TypeScript",
  contenu: "TypeScript est...",
  auteur: auteur,
  datePublication: new Date(),
  tags: ["typescript", "programmation"]
};
```

---

## Exercice 5 : Tout ensemble 🚀

### Objectif
Combiner tous les concepts appris dans un mini-projet.

### Consignes
Crée un système de gestion de bibliothèque :

**Interface `Livre`** avec :
- `titre: string`
- `auteur: string`
- `isbn: string`
- `disponible: boolean`

**Classe `Bibliotheque`** avec :
- Un tableau **privé** de livres
- Méthode `ajouterLivre(livre: Livre): void`
- Méthode `rechercherParTitre(titre: string): Livre | undefined`
- Méthode `emprunter(isbn: string): boolean` (retourne `true` si réussi)
- Méthode `retourner(isbn: string): void`

### Exemple d'utilisation
```typescript
const biblio = new Bibliotheque();

biblio.ajouterLivre({
  titre: "Clean Code",
  auteur: "Robert C. Martin",
  isbn: "978-0132350884",
  disponible: true
});

biblio.emprunter("978-0132350884"); // true
biblio.emprunter("978-0132350884"); // false (déjà emprunté)
biblio.retourner("978-0132350884");
biblio.rechercherParTitre("Clean Code"); // Retourne le livre
```

---

## Conseils

- Essaie de faire les exercices dans l'ordre
- Teste ton code avec différents cas d'usage
- N'hésite pas à consulter la documentation TypeScript si besoin
- Tu peux me montrer tes solutions pour avoir un feedback !

## Besoin d'aide ?

Si tu bloques sur un exercice, demande-moi :
- Des indices
- Des explications sur un concept
- Une correction détaillée

Bon courage ! 💪