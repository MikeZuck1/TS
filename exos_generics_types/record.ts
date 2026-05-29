type page = "home" | "about" | "contact";

interface PageInfo {
  title: string;
}

const x: Record<page, PageInfo> = {
  home: { title: "Accueil" },
  about: { title: "À propos" },
  contact: { title: "Contact" },
};

console.log(x);