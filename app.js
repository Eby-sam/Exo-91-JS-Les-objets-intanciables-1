function Personne(nom, prenom, age, sexe){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.sexe = sexe;

    this.getPersonne = function (){
        return "Ma personne s'appelle " + this.nom + " " + this.prenom + ", age => " + this.age + ",  sexe => " + this.sexe;
    }

    this.setChangement = function (newP, newA){
        this.prenom = newP;
        this.age = newA;
    }
}

let sam = new Personne("Coquelet", "Samuel", 31, "Masculin");
let tsunade = new Personne("Senju", "Tsunade", 51, "Féminin");

document.getElementById("premier1").innerHTML = sam.nom;
document.getElementById("deuxieme1").innerHTML = sam.prenom;
document.getElementById("troisieme1").innerHTML = sam.age;
document.getElementById("quatrieme1").innerHTML = sam.sexe;

document.getElementById("premier2").innerHTML = tsunade.nom;
document.getElementById("deuxieme2").innerHTML = tsunade.prenom;
document.getElementById("troisieme2").innerHTML = tsunade.age;
document.getElementById("quatrieme2").innerHTML = tsunade.sexe ;

document.getElementById("premiereMethod1").innerHTML = sam.getPersonne();
sam.setChangement("Bakura",18)
document.getElementById("deuxiemeMethod1").innerHTML = sam.getPersonne();

document.getElementById("premiereMethod2").innerHTML = tsunade.getPersonne();
tsunade.setChangement("Nelliel",33);
document.getElementById("deuxiemeMethod2").innerHTML = tsunade.getPersonne()