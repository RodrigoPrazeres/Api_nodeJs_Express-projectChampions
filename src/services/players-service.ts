import PlayerModel from "../models/player-models";
import statisticsModel from "../models/statistics-model";
import * as PlayersRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerservice = async () => {
    const data = await PlayersRepository.findAllPlayers();
    let response = null;

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }
    return response;
};


export const getPlayerByIdService = async (id: number) => {
    const data = await PlayersRepository.findPlayerById(id);
    let response = null;

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;

    if (Object.keys(player).length !== 0) {
        response = await PlayersRepository.insertPlayer(player);

        response = await HttpResponse.created();
        return response;
    } else {
        response = await HttpResponse.badRequest();
        return response;
    }

};

export const deletePlayerService = async (id: number) => {
    let response = null;
    const isDeleted = await PlayersRepository.deletePlayer(id);

    if(isDeleted){
    response = await HttpResponse.ok({ message: "deleted" });
    }else{
        response = await HttpResponse.badRequest();
    }
    return response;

};

export const updatePlayerService = async (id: number, statistics: statisticsModel) => {
    const data = await PlayersRepository.FindAndUpdatePlayer(id, statistics);
    let response = null;

    if (Object.keys(data).length === 0) {
        response = await HttpResponse.badRequest();
        
    } else {
        response = HttpResponse.ok(data);
        return response;
    }
    
    return response;

};