export class RelatieDto {
    zenderID: number;
    email: string;

    constructor(zenderID: number, email: string) {
        this.zenderID = zenderID;
        this.email = email;
    }
}
