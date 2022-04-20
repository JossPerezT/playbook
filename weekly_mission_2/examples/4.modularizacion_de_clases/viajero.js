// defincion de otra clase

import Explorer from "./explorer.js";
export default class Viajero extends Explorer {
    constructor (name, username, mission, cycle){
        super(name, username, mission)
        this.cycle = cycle
    }

    getGeneralInfo (){
        let NameAndUserName = this.getNameAndUserName()
        return `${NameAndUserName}, Ciclo ${this.cycle}`
    }
}