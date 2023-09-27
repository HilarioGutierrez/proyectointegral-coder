import userMongooseRepository from "../../data/repositories/userMongooseRepository.js";

class userManager {

    constructor(){
        this.userManager = new userMongooseRepository()
    }
    async create(user){
        return this.userManager.create(user)
    }

    async getOne(email){
        return this.userManager.getOne(email)
    }

    async updateOne(email, data) {
        return this.userManager.updateOne(email, data)
    }

    async deleteOne(email) {
        return this.userManager.deleteOne(email)
    }


}

export default userManager;