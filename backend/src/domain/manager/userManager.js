import userMongooseRepository from "../../data/repositories/userMongooseRepository";

class userManager {

    constructor(){
        this.userManager = new userMongooseRepository()
    }
    async create(user){
        this.userManager.create(user)
    }

    async getOne(user){
        this.userManager.getOne(user)
    }

    async update(email, data) {
        this.userManager.updateOne(email, data)
    }

    async delete(email) {
        this.userManager.deleteOne(email)
    }


}

export default userManager;