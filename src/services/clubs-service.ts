import * as HttpResponse from "../utils/http-helper";
import * as Repository from "../repositories/clubs-repository";

export const getClubsService = async () => {
    const data = await Repository.findAllClubs();
    const response = HttpResponse.ok(data);
    return response;
};