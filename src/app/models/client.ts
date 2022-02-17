import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";
import { Benificaire } from "./benificaire";

export class Client
 {

    username!:string;
    password!:string;
    prenom!:string;
    nom!:string;
    titre!:string;
    email!:string;
    gsm!:string;
    typeIdentite!:string;
    numIdentite!:string;
    paysEmission!:string;
    validiteIdentite!:string;
    dateNaissance!:string;
    profession!:string;
    paysNationalite!:string;
    adresseLegale!:string;
    ville!:string;
    benificiares!:Benificaire[];
    


}
